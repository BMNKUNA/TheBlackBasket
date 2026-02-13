// studio/sanity.cli.ts
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zp67d9fj',
    dataset: 'production',
  },

  deployment: {
    appId: 'dghmwc9jr9ybtkolpdfqjhf8',
    autoUpdates: true,
  },
})
