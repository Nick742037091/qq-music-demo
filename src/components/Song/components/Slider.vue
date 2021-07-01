<template>
  <div ref="sliderWrapper" class="slider-wrapper" @click="onClickWrapper">
    <div class="progress-seek" />
    <div class="progress-buffered" />
    <div class="progress-played" :style="playedStyle" />
    <div class="dragger-wrapper" :style="draggerStyle">
      <div class="dragger" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const playedRatio = computed(() => modelValue.value * 100 + '%')
    const playedStyle = computed(() => ({ width: playedRatio.value }))
    const draggerStyle = computed(() => ({ left: playedRatio.value }))

    // 获取ref为sliderWrapper的元素，神奇
    const sliderWrapper = ref()

    const onClickWrapper = (event: MouseEvent) => {
      // 这里注意sliderWrapper.value才是元素
      const left = sliderWrapper.value.getBoundingClientRect().left
      const clientX = event.clientX
      const wrapperWidth = sliderWrapper.value.clientWidth
      let value = (clientX - left) / wrapperWidth
      if (value > 1) value = 1
      if (value < 0) value = 0
      emit('update:modelValue', value)
      emit('change', value)
    }
    return {
      playedStyle,
      draggerStyle,
      onClickWrapper,
      sliderWrapper
    }
  }
})
</script>

<style scoped lang="less">
.slider-wrapper {
  height: 30px;
  width: 100%;
  position: relative;

  .progress-seek,
  .progress-played {
    position: absolute;
    left: 0;
    height: 3px;
    border-radius: 3px;
    top: 50%;
    transform: translateY(-50%);
  }
  .progress-seek {
    z-index: 100;
    right: 0;
    background-color: #aaa;
  }
  .progress-played {
    z-index: 101;
    background-color: white;
  }
  .dragger-wrapper {
    .flex();
    .ai-center();
    .jc-center();
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    z-index: 102;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      .dragger {
        transform: scale(2);
      }
    }
    .dragger {
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      transition: all 0.2 ease;
    }
  }
}
</style>
