export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',

  // Use CDN only in production (faster but cached)
  useCdn: process.env.NODE_ENV === 'production',

  // Read token (ONLY needed if dataset is private)
  token: process.env.SANITY_API_READ_TOKEN || undefined,
}
