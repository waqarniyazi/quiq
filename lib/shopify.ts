/**
 * Shopify Storefront API client for headless checkout.
 *
 * Products live in Shopify (source of truth for price/inventory/variant IDs);
 * editorial content stays in lib/products.ts. They line up because a product's
 * `slug` here == its Shopify product `handle`.
 *
 * Flow: cart (lib/cart.tsx, keyed by product id == slug == handle)
 *   -> resolve each handle to its Shopify variant id (getVariantsByHandles)
 *   -> cartCreate with those variants (createCartCheckout)
 *   -> redirect the browser to Shopify's hosted checkout URL.
 *
 * The Storefront public token is read + checkout scoped, so it is safe to use
 * from the browser (that's what it's designed for).
 */

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2025-07'

export function isShopifyConfigured(): boolean {
  return Boolean(DOMAIN && TOKEN)
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!DOMAIN || !TOKEN) {
    throw new Error('Shopify is not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN.')
  }

  const res = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`)
  }

  const json = (await res.json()) as { data?: T; errors?: Array<{ message: string }> }
  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL error: ${json.errors.map((e) => e.message).join('; ')}`)
  }
  if (!json.data) {
    throw new Error('Shopify API returned no data.')
  }
  return json.data
}

export interface ShopifyVariant {
  handle: string
  variantId: string
  availableForSale: boolean
  price: number
  currencyCode: string
}

interface ProductNode {
  handle: string
  variants: { nodes: Array<{ id: string; availableForSale: boolean; price: { amount: string; currencyCode: string } }> }
}

/**
 * Resolve a list of product handles to their (first) variant in one round trip.
 * Returns a Map keyed by handle; handles with no matching Shopify product are
 * simply absent from the map (caller decides how to handle that).
 */
export async function getVariantsByHandles(handles: string[]): Promise<Map<string, ShopifyVariant>> {
  const unique = Array.from(new Set(handles))
  if (unique.length === 0) return new Map()

  // Aliased query: p0, p1, ... -> product(handle: ...). One request, N lookups.
  const fields = unique
    .map(
      (handle, i) =>
        `p${i}: product(handle: ${JSON.stringify(handle)}) { handle variants(first: 1) { nodes { id availableForSale price { amount currencyCode } } } }`,
    )
    .join('\n')

  const data = await shopifyFetch<Record<string, ProductNode | null>>(`query { ${fields} }`)

  const map = new Map<string, ShopifyVariant>()
  for (let i = 0; i < unique.length; i++) {
    const node = data[`p${i}`]
    const variant = node?.variants.nodes[0]
    if (node && variant) {
      map.set(node.handle, {
        handle: node.handle,
        variantId: variant.id,
        availableForSale: variant.availableForSale,
        price: Number(variant.price.amount),
        currencyCode: variant.price.currencyCode,
      })
    }
  }
  return map
}

export interface CheckoutLine {
  variantId: string
  quantity: number
}

interface CartCreateResult {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null
    userErrors: Array<{ field: string[] | null; message: string }>
  }
}

/** Create a Shopify cart from variant lines and return its hosted checkout URL. */
export async function createCartCheckout(lines: CheckoutLine[]): Promise<string> {
  const data = await shopifyFetch<CartCreateResult>(
    `mutation cartCreate($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { id checkoutUrl }
        userErrors { field message }
      }
    }`,
    { lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })) },
  )

  const { cart, userErrors } = data.cartCreate
  if (userErrors.length) {
    throw new Error(userErrors.map((e) => e.message).join('; '))
  }
  if (!cart) {
    throw new Error('Shopify did not return a checkout URL.')
  }
  return cart.checkoutUrl
}

/**
 * High-level entry point used by the cart page. Takes the local cart items
 * (product id == handle) and returns the Shopify checkout URL to redirect to.
 * Throws with a human-readable message if any item can't be checked out.
 */
export async function startCheckout(items: Array<{ id: string; name: string; quantity: number }>): Promise<string> {
  if (items.length === 0) throw new Error('Your cart is empty.')

  const variants = await getVariantsByHandles(items.map((i) => i.id))

  const missing = items.filter((i) => !variants.has(i.id)).map((i) => i.name)
  if (missing.length) {
    throw new Error(`These items aren't available for checkout yet: ${missing.join(', ')}.`)
  }

  const unavailable = items
    .filter((i) => !variants.get(i.id)!.availableForSale)
    .map((i) => i.name)
  if (unavailable.length) {
    throw new Error(`These items are currently out of stock: ${unavailable.join(', ')}.`)
  }

  const lines: CheckoutLine[] = items.map((i) => ({
    variantId: variants.get(i.id)!.variantId,
    quantity: i.quantity,
  }))

  return createCartCheckout(lines)
}
