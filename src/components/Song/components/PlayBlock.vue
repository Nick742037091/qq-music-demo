<template>
  <div class="play-block">
    <img
      v-for="item in BTN_LIST"
      :key="item.key"
      :src="item.icon"
      :class="{ 'play-btn': item.key === 'play' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const BTN_LIST: BtnItem[] = [
  {
    key: 'refresh',
    icon: 'src/assets/icon_refresh.png',
  },
  {
    key: 'backward',
    icon: 'src/assets/icon_backward.png',
  },
  {
    key: 'play',
    icon: 'src/assets/icon_play.png',
  },
  {
    key: 'forward',
    icon: 'src/assets/icon_forward.png',
  },
  {
    key: 'playList',
    icon: 'src/assets/icon_play_list.png',
  },
]

export default defineComponent({
  setup() {
    return {
      BTN_LIST,
    }
  },
})
</script>

<style scoped lang="less">
.play-block {
  .flex();
  .jc-between();
  .ai-center();
  margin: 10px 0;
  img {
    width: 22px;
    height: 22px;
  }
  .play-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
