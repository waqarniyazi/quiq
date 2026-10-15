// Project ID and dataset are public identifiers (the dataset is public-read),
// so they default here and deploys work without extra env vars.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uxd96nzt'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-19'
