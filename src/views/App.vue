<template>
  <div class="app">
    <Header v-model:tab-index="tabIndex" />
    <Song v-show="tabIndex === 1" />
    <Lyric v-show="tabIndex === 2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import Header from '@/components/Header/index.vue'
import Song from '@/components/Song/index.vue'
import Lyric from '@/components/Lyric/index.vue'
import useTab from '@/composables/app/useTab'
import SongStore from '@/store/song'
import UserStore from '@/store/user'
export default defineComponent({
  name: 'App',
  components: { Header, Song, Lyric },
  setup() {
    const { tabIndex } = useTab()

    onMounted(async () => {
      SongStore.getSongList()
      UserStore.login()
    })

    return {
      tabIndex
    }
  }
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
