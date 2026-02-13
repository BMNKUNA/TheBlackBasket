import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zp67d9fj',
    dataset: 'production'
  },
  deployment: {
    appId: 'tw25u6efuvr5307kqmmxgs0l',
    autoUpdates: true
  }
  //…
})