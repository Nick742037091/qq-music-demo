<template>
  <div class="action-block">
    <img v-for="item in BTN_LIST" :key="item.key" :src="item.icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface BtnItem {
  key: string
  icon: string
}

const BTN_LIST: BtnItem[] = [
  {
    key: 'sing',
    icon: 'src/assets/icon_sing.png',
  },
  {
    key: 'effect',
    icon: 'src/assets/icon_wave.png',
  },
  {
    key: 'download',
    icon: 'src/assets/icon_download.png',
  },
  {
    key: 'comment',
    icon: 'src/assets/icon_comment.png',
  },
  {
    key: 'more',
    icon: 'src/assets/icon_more.png',
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
.action-block {
  .flex();
  .jc-between();
  margin: auto 0 10px;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
