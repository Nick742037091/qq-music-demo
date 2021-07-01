<template>
  <transition name="fade">
    <div v-show="modelValue" class="play-list">
      <div class="header">
        {{ playRule }}
      </div>
      <div class="list-wrapper">
        <div
          v-for="(item, index) in songList"
          :key="index"
          class="item-row"
          @click="selectSong(index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="close-btn" @click="close">关闭</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SongStore from '@/store/song'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const playRule = computed(() => {
      return '顺序播放'
    })
    const songList = computed(() => SongStore.songList)
    const selectSong = (index: number) => {
      SongStore.setSongIndex(index)
      close()
    }
    const close = () => emit('update:modelValue', false)
    return {
      playRule,
      songList,
      selectSong,
      close
    }
  }
})
</script>

<style scoped lang="less">
.fade-enter-from,
.fade-leave-to {
  transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
@fade-color: fade(#aaa, 30%);

.play-list {
  .flex();
  .flex-column();
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  top: 20%;
  bottom: 0;
  background-color: fade(#1e222e, 95%);
  z-index: 1000;
  border-radius: 10px 10px 0 0;
  .header {
    .flex();
    .ai-center();
    height: 40px;
    margin-top: 2px;
    padding: 0 10px;
    box-shadow: 0 1px 1px @fade-color;
  }
  .list-wrapper {
    .flex-main();
    overflow: auto;
    .item-row {
      .flex();
      .ai-center();
      height: 40px;
      font-size: 13px;
      padding: 0 10px;
    }
    .item-row + .item-row {
      box-shadow: 0 -1px 1px @fade-color;
    }
  }
  .close-btn {
    box-shadow: 0 -1px 1px @fade-color;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>
