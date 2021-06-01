<template>
  <div class="header">
    <div class="arrow-down" />
    <div class="tab-block">
      <div
        class="tab"
        :key="item.key"
        :class="{ 'tab--active': index === tabIndex }"
        v-for="(item, index) in tabList"
        @click.stop="onClickTab(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="share" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
const TAB_LIST = [
  { key: 'recommend', title: '推荐' },
  { key: 'song', title: '歌曲' },
  { key: 'lyric', title: '歌词' },
]

export default defineComponent({
  props: {
    tabIndex: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const tabList = reactive(TAB_LIST)
    const onClickTab = (index: number) => {
      emit('update:tabIndex', index)
    }
    return {
      tabList,
      onClickTab,
    }
  },
})
</script>

<style scoped lang="less">
.header {
  .flex();
  .ai-center();
}
.arrow-down {
  width: 18px;
  height: 18px;
  background-image: url('@/assets/icon_arrow_down.png');
  background-size: 100%;
}
.tab-block {
  .flex();
  .ai-center();
  margin: auto;
  .tab {
    user-select: none;
    font-size: 13px;
    color: lightgrey;
    padding: 0 10px;
  }
  .tab--active {
    color: white;
  }
  .tab + .tab {
    border-left: solid 1px white;
  }
}
.share {
  width: 20px;
  height: 20px;
  background-image: url('@/assets/icon_share.png');
  background-size: 100%;
}
</style>
