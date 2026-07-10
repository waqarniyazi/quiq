/**
 * Generates `shopify-products.csv` in the repo root from the sellable products
 * in lib/products.ts, in Shopify's standard product-import format.
 *
 * Key mapping (so the headless storefront can line products up 1:1):
 *   - Shopify "Handle"      = product.slug   (== product.id for all current products)
 *   - Variant SKU           = product.id
 *   - Variant Price         = product.price
 *   - Variant Compare At    = product.originalPrice
 *   - Image Src             = https://quiqhealth.in + product.image
 *
 * "Coming soon" products (availableNow === false) are imported with 0 inventory
 * and policy "deny" so they exist in Shopify but cannot be checked out yet.
 *
 * Run:  npx tsx scripts/generate-shopify-csv.ts
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { products } from '../lib/products'

const SITE = 'https://quiqhealth.in'

// Standard Shopify product CSV columns (subset that Shopify accepts on import).
const COLUMNS = [
  'Handle',
  'Title',
  'Body (HTML)',
  'Vendor',
  'Product Category',
  'Type',
  'Tags',
  'Published',
  'Option1 Name',
  'Option1 Value',
  'Variant SKU',
  'Variant Grams',
  'Variant Inventory Tracker',
  'Variant Inventory Qty',
  'Variant Inventory Policy',
  'Variant Fulfillment Service',
  'Variant Price',
  'Variant Compare At Price',
  'Variant Requires Shipping',
  'Variant Taxable',
  'Image Src',
  'Image Position',
  'Image Alt Text',
  'Gift Card',
  'SEO Title',
  'SEO Description',
  'Status',
] as const

/** Quote a CSV field per RFC 4180 (wrap in quotes, double internal quotes). */
function csv(value: string | number | boolean): string {
  const s = String(value)
  return `"${s.replace(/"/g, '""')}"`
}

/** Normalize a local image path to an absolute, URL-encoded URL Shopify can fetch. */
function imageUrl(image: string): string {
  const path = image.startsWith('/') ? image : `/${image}`
  return SITE + path.split('/').map(encodeURIComponent).join('/').replace(/^%2F/, '')
}

function bodyHtml(p: (typeof products)[number]): string {
  const features = p.features.map((f) => `<li>${f}</li>`).join('')
  return `<p>${p.description}</p><ul>${features}</ul>`
}

const rows = products.map((p) => {
  const available = p.availableNow
  return {
    Handle: p.slug,
    Title: p.name,
    'Body (HTML)': bodyHtml(p),
    Vendor: 'QUIQ',
    'Product Category': 'Health & Beauty > Health Care',
    Type: p.category,
    Tags: p.category,
    Published: 'TRUE',
    'Option1 Name': 'Title',
    'Option1 Value': 'Default Title',
    'Variant SKU': p.id,
    'Variant Grams': 30,
    'Variant Inventory Tracker': 'shopify',
    'Variant Inventory Qty': available ? 100 : 0,
    // In-stock items track normally; "coming soon" items allow pre-orders
    // (continue selling at 0 qty) so Buy Now works before launch.
    'Variant Inventory Policy': available ? 'deny' : 'continue',
    'Variant Fulfillment Service': 'manual',
    'Variant Price': p.price,
    'Variant Compare At Price': p.originalPrice ?? '',
    'Variant Requires Shipping': 'TRUE',
    'Variant Taxable': 'TRUE',
    'Image Src': imageUrl(p.image),
    'Image Position': 1,
    'Image Alt Text': p.name,
    'Gift Card': 'FALSE',
    'SEO Title': p.name,
    'SEO Description': p.shortDescription,
    Status: 'active',
  } satisfies Record<(typeof COLUMNS)[number], string | number | boolean>
})

const csvText = [
  COLUMNS.map(csv).join(','),
  ...rows.map((row) => COLUMNS.map((col) => csv(row[col])).join(',')),
].join('\n')

const outPath = join(process.cwd(), 'shopify-products.csv')
writeFileSync(outPath, csvText + '\n', 'utf8')
console.log(`Wrote ${rows.length} products to ${outPath}`)
