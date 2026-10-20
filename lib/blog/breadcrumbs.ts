import { SITE_URL } from '@/lib/constants'
import type { Crumb } from '@/components/research/breadcrumbs'

/** BreadcrumbList data, so search results can show the trail (Home › Blog › Self-Testing). */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
    })),
  }
}
