<template>
  <div class="app">
    <Header v-model:tab-index="tabIndex" />
    <Song v-show="tabIndex === 1" :songDetail="songDetail" />
    <Lyric v-show="tabIndex === 2" :content="songDetail.lyric" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Header from '@/components/Header/index.vue'
import Song from '@/components/Song/index.vue'
import Lyric from '@/components/Lyric/index.vue'
import useTab from '@/composables/app/useTab'
import useSongDetail from '@/composables/app/useSongDetail'

export default defineComponent({
  name: 'App',
  components: { Header, Song, Lyric },
  setup() {
    const { tabIndex } = useTab()
    const { songDetail, getSongDetail } = useSongDetail()

    onMounted(() => {
      getSongDetail()
    })

    return {
      tabIndex,
      songDetail,
    }
  },
})
</script>

<style lang="less" scoped>
.app {
  .flex();
  .flex-column();
  user-select: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
}
</style>
