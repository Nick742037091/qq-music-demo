<template>
  <div class="lyric" v-html="content" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SongStore from '@/store/song'

export default defineComponent({
  props: {},
  setup() {
    const content = computed(() => SongStore.songDetail.lyric)
    return { content }
  }
})
</script>

<style scoped lang="less">
.lyric {
  .flex-main();
  overflow: auto;
  padding: 20px 10px;
  color: white;
  font-size: 18px;
  line-height: 2.5;
}
</style>
