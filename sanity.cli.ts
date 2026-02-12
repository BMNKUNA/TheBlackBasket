import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zp67d9fj',
    dataset: 'production'
  },
  deployment: {
    appId: 'abktrnhl24zvrvy3d0k5f0xk',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio-auto-updates
     */
    autoUpdates: true,
  }
})