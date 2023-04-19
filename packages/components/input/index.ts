import type { DefineComponent } from 'vue'
import { withInstall } from '@sunny-ui/utils'
import Comp from './src/index.vue'

export const Input = withInstall(Comp as DefineComponent)

export default Input