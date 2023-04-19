import { App, Plugin } from 'vue'
import { version as eleVersion } from 'element-plus'
import { version } from './version'

import 'element-plus/dist/index.css'


const INSTANLLED_KEY = Symbol('INSTANLLED_KEY')

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    (window as any).$version = { vue: app.version, ele: eleVersion }

    // @ts-ignore
    if (app[INSTANLLED_KEY]) {
      return
    }
    // @ts-ignore
    app[INSTANLLED_KEY] = true
    components.forEach((c) => app.use(c))
  }
  return {
    install,
    version
  }
}

