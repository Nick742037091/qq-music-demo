<template>
  <div class="lyric" v-html="content"></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {},
  setup() {
    const store = useStore()
    const content = computed(() => store.state.song.songDetail.lyric)
    return { content }
  },
})
</script>

<style scoped lang="less">
.lyric {
  padding: 20px 10px;
  color: white;
  font-size: 18px;
  line-height: 2.5;
}
</style>
