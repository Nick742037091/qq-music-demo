<template>
  <div class="play-block">
    <img src="@/assets/icon_refresh.png" />
    <img src="@/assets/icon_backward.png" @click="onClickBackward" />
    <img class="play-btn" :src="btnImgSrc" @click="onTogglePlay" />
    <img src="@/assets/icon_forward.png" @click="onClickForward" />
    <img src="@/assets/icon_play_list.png" @click="onClickPlayList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import ICON_PAUSE from '@/assets/icon_pause.png'
import ICON_PLAY from '@/assets/icon_play.png'
export default defineComponent({
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  emits: ['togglePlay', 'forward', 'backward', 'togglePlayList'],
  setup(props, { emit }) {
    const { isPlaying } = toRefs(props)
    /***** 播放相关 ******/
    const btnImgSrc = computed(() => {
      return isPlaying.value ? ICON_PAUSE : ICON_PLAY
    })
    const onTogglePlay = () => emit('togglePlay')
    const onClickForward = () => emit('forward')
    const onClickBackward = () => emit('backward')
    const onClickPlayList = () => emit('togglePlayList')
    return {
      onTogglePlay,
      onClickForward,
      onClickBackward,
      onClickPlayList,
      btnImgSrc
    }
  }
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
