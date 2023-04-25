<script lang="ts">
import { h, defineComponent, ComponentPublicInstance } from 'vue'
import { ElInput } from 'element-plus'
import { PRE_FIX } from '@sunny-ui/constants'

import 'element-plus/theme-chalk/el-input.css'


const name = `${PRE_FIX}-input`
export default defineComponent({
  name,
  render({ $attrs, $slots }: ComponentPublicInstance) {
    return h(ElInput, { ...$attrs }, $slots)
  }
})
</script>
