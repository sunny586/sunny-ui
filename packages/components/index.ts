import type { DefineComponent } from 'vue'

import Button from './button/index.vue'
import Input from './input/index.vue'


// 重写el组件

export const components = [
  Button,
  Input
] as DefineComponent[]


