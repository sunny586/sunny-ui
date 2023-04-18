<script lang="ts">
import { h, defineComponent, ComponentPublicInstance } from 'vue'
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'el-input',
  render({ $attrs, $slots }: ComponentPublicInstance) {
    return h(ElInput, { ...$attrs }, $slots)
  }
})
</script>
