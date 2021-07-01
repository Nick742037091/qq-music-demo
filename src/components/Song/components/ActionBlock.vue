<template>
  <div class="action-block">
    <img v-for="item in BTN_LIST" :key="item.key" :src="item.icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 在非模板中使用图片，只能先导入再使用
import ICON_SING from '@/assets/icon_sing.png'
import ICON_WAVE from '@/assets/icon_wave.png'
import ICON_DOWNLOAD from '@/assets/icon_download.png'
import ICON_COMMENT from '@/assets/icon_comment.png'
import ICON_MORE from '@/assets/icon_more.png'

interface BtnItem {
  key: string
  icon: string
}

const BTN_LIST: BtnItem[] = [
  {
    key: 'sing',
    icon: ICON_SING
  },
  {
    key: 'effect',
    icon: ICON_WAVE
  },
  {
    key: 'download',
    icon: ICON_DOWNLOAD
  },
  {
    key: 'comment',
    icon: ICON_COMMENT
  },
  {
    key: 'more',
    icon: ICON_MORE
  }
]

export default defineComponent({
  setup() {
    return {
      BTN_LIST
    }
  }
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
