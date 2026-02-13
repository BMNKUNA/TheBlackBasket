import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Black basket travel',

  projectId: 'zp67d9fj',
  dataset: 'production',

  // IMPORTANT — ensures the studio is served from the root of its domain
  basePath: '/',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
