import { components } from '@sunny-ui/components'

import type { App } from 'vue'
import { version } from 'element-plus'
import 'element-plus/dist/index.css'

const PRF_FIX = 'kye'

const install = (app: App) => {
  window.$version = { vue: app.version, ele: version }
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name.replace('el', PRF_FIX), component)
    } else {
      throw new Error('请给组件设置一个name')
    }
  })
}

export default install