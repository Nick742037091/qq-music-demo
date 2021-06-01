<template>
  <div class="lyric" v-html="content"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.lyric {
  padding: 20px 10px;
  color: white;
  font-size: 18px;
  line-height: 2.5;
}
</style>
