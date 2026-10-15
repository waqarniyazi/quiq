import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

/** Seconds a fetched page stays cached before Next refetches from Sanity. */
const REVALIDATE_SECONDS = 60

export function sanityFetch<T>(query: string, params: QueryParams = {}, tags: string[] = []): Promise<T> {
  return client.fetch<T>(query, params, { next: { revalidate: REVALIDATE_SECONDS, tags } })
}
