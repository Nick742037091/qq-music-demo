<template>
  <div class="info-block">
    <div class="left-block">
      <div class="song-name">
        {{ songDetail.name }}
      </div>
      <div class="singer-block">
        <div>{{ songDetail.singer }}</div>
        <div :class="likeStatusClass" @click="onToggleLikeSinger">
          {{ likeSingerStatus }}
        </div>
        <div class="vip">VIP</div>
      </div>
      <div class="row-lyric">
        {{ rowLyric }}
      </div>
    </div>

    <img class="icon-favorite" :src="favoriteIcon" @click="onToggleFavorite" />
  </div>
</template>

<script lang="ts">
import useSongInfo from '@/composables/song/useSongInfo'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const useSongInfoData = useSongInfo()
    return {
      ...useSongInfoData
    }
  }
})
</script>

<style scoped lang="less">
.info-block {
  .flex();
  .ai-center();
  .left-block {
    .flex-main();
    .flex();
    .flex-column();
    .song-name {
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .singer-block {
      .flex();
      .ai-center();
      font-size: 14px;
      margin-bottom: 10px;
      .like {
        border-radius: 10px;
        color: #999;
        border: 1px solid #999;
        padding: 1px 8px;
        margin: 0 10px;
        font-size: 13px;
        @active-color: #999;
        @inactive-color: #ccc;
        &--active {
          color: @active-color;
          border: 1px solid @active-color;
        }
        &--inactive {
          color: @inactive-color;
          border: 1px solid @inactive-color;
        }
      }
      .vip {
        background-color: white;
        border-radius: 2px;
        padding: 1px 4px;
        font-size: 12px;
        color: #999;
      }
    }

    .row-lyric {
      font-size: 14px;
    }
  }
  .icon-favorite {
    width: 32px;
    height: 32px;
  }
}
</style>
