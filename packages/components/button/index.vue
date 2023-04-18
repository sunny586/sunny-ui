<script lang="ts">
import { h, defineComponent, ComponentPublicInstance } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'el-button',
  render({ $attrs, $slots }: ComponentPublicInstance) {
    return h(ElButton, { ...$attrs }, $slots)
  }
})
</script>
