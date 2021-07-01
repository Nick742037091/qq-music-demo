<template>
  <div class="poster" :style="posterStyle">
    <div class="poster-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import DEFAULT_POSTER from '@/assets/img_poster_default.png'

export default defineComponent({
  props: {},
  setup() {
    const posterStyle = computed(() => {
      // const backgroundImg = url.value || DEFAULT_POSTER
      const backgroundImg = DEFAULT_POSTER
      return {
        backgroundImage: `url(${backgroundImg})`
      }
    })

    return {
      posterStyle
    }
  }
})
</script>

<style scoped lang="less">
@import '@/styles/mixin.less';
.poster {
  position: relative;
  height: 0;
  padding-bottom: 80%;
  margin: 20px 10px;
  width: calc(100% - 20px);
  background-size: 100% 100%;
  border-radius: 12px;
  &-container {
    .abs-full();
  }
}
</style>
