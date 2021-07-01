<template>
  <div class="song">
    <Poster :url="songDetail.poster" />
    <InfoBlock :songDetail="songDetail" />
    <ActionBlock />
    <Slider v-model="playedRatio" @change="onChangeSlider" />
    <div class="time-block">
      <div>{{ formatPlayedTime }}</div>
      <div>{{ formatDuration }}</div>
    </div>
    <PlayBlock
      :isPlaying="isPlaying"
      @togglePlay="onTogglePlay"
      @forward="jumpForward15s"
      @backward="jumpBackward15s"
    />
    <audio :src="songDetail.url" ref="audio" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { useStore } from 'vuex'
import Poster from './components/Poster.vue'
import InfoBlock from './components/InfoBlock.vue'
import ActionBlock from './components/ActionBlock.vue'
import Slider from './components/Slider.vue'
import PlayBlock from './components/PlayBlock.vue'
import usePlayStatus from '@/composables/song/usePlayStatus'
import { SongState } from '@/store/song/types'

export default defineComponent({
  components: {
    Poster,
    InfoBlock,
    ActionBlock,
    Slider,
    PlayBlock,
  },
  setup(props) {
    const store = useStore()
    // 定义元素为HTMLMediaElement
    const audio = ref<HTMLMediaElement>()

    const playStatus = usePlayStatus(audio)

    const songDetail = computed(() => store.state.song.songDetail)

    return {
      ...playStatus,
      audio,
      songDetail,
    }
  },
})
</script>

<style scoped lang="less">
.song {
  .flex();
  .flex-column();
  color: #ccc;
  height: 100%;
  .time-block {
    margin-top: -5px;
    .flex();
    .jc-between();
    font-size: 12px;
    color: #aaa;
  }
}
</style>
