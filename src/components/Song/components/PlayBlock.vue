<template>
  <div class="play-block">
    <img src="src/assets/icon_refresh.png" />
    <img src="src/assets/icon_backward.png" @click="onClickBackward" />
    <img class="play-btn" :src="btnImgSrc" @click="onTogglePlay" />
    <img src="src/assets/icon_forward.png" @click="onClickForward" />
    <img src="src/assets/icon_play_list.png" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { isPlaying } = toRefs(props)
    /***** 播放相关 ******/
    const btnImgSrc = computed(() => {
      return isPlaying.value
        ? 'src/assets/icon_pause.png'
        : 'src/assets/icon_play.png'
    })
    const onTogglePlay = () => {
      emit('togglePlay')
    }
    const onClickForward = () => {
      emit('forward')
    }
    const onClickBackward = () => {
      emit('backward')
    }
    return {
      onTogglePlay,
      onClickForward,
      onClickBackward,
      btnImgSrc,
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
