import type { DefineComponent } from 'vue'
import { withInstall } from '@sunny-ui/utils'
import Comp from './src/index.vue'

export const Button = withInstall(Comp as DefineComponent)

export default Button