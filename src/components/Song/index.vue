<template>
  <div class="song">
    <Poster />
    <InfoBlock />
    <ActionBlock />
    <Slider v-model="playedRatio" @change="onChangeSlider" />
    <div class="time-block">
      <div>{{ formatPlayedTime }}</div>
      <div>{{ formatDuration }}</div>
    </div>
    <PlayBlock
      :is-playing="isPlaying"
      @togglePlay="onTogglePlay"
      @forward="jumpForward15s"
      @backward="jumpBackward15s"
      @togglePlayList="showPlayList = true"
    />
    <audio ref="audio" :src="audioUrl" />
    <PlayList v-model="showPlayList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Poster from './components/Poster.vue'
import InfoBlock from './components/InfoBlock.vue'
import ActionBlock from './components/ActionBlock.vue'
import Slider from './components/Slider.vue'
import PlayBlock from './components/PlayBlock.vue'
import PlayList from './components/PlayList.vue'
import usePlayStatus from '@/composables/song/usePlayStatus'
import SongStore from '@/store/song'

export default defineComponent({
  components: {
    Poster,
    InfoBlock,
    ActionBlock,
    Slider,
    PlayBlock,
    PlayList
  },
  setup() {
    // 定义元素为HTMLMediaElement
    const audio = ref<HTMLMediaElement>()
    const playStatus = usePlayStatus(audio)

    const audioUrl = computed(() => SongStore.songDetail.url)
    const showPlayList = ref(false)

    return {
      ...playStatus,
      audio,
      audioUrl,
      showPlayList
    }
  }
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
