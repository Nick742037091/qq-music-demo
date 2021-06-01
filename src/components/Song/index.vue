<template>
  <div class="song">
    <Poster :url="songDetail.poster" />
    <InfoBlock :songDetail="songDetail" />
    <ActionBlock />
    <Slider v-model="playedRatio" />
    <div class="time-block">
      <div>{{ formatPlayedTime }}</div>
      <div>{{ formatDuration }}</div>
    </div>
    <PlayBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SongDeatail } from '@/model/song'
import Poster from './components/Poster.vue'
import InfoBlock from './components/InfoBlock.vue'
import ActionBlock from './components/ActionBlock.vue'
import Slider from './components/Slider.vue'
import PlayBlock from './components/PlayBlock.vue'
import usePlayStatus from '@/composables/song/usePlayStatus'

export default defineComponent({
  components: {
    Poster,
    InfoBlock,
    ActionBlock,
    Slider,
    PlayBlock,
  },
  props: {
    songDetail: {
      type: Object as PropType<SongDeatail>,
      default: () => ({}),
    },
  },
  setup(props) {
    const usePlayStatusData = usePlayStatus(props)
    return {
      ...usePlayStatusData,
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
