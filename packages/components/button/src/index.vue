<script lang="ts">
import { h, defineComponent, ComponentPublicInstance } from 'vue'
import { ElButton } from 'element-plus'
import { PRE_FIX } from '@sunny-ui/constants'
import 'element-plus/theme-chalk/el-button.css'

const name = `${PRE_FIX}-button`
export default defineComponent({
  name,
  render({ $attrs, $slots }: ComponentPublicInstance) {
    return h(ElButton, { ...$attrs }, $slots)
  }
})
</script>
