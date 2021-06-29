import { SongDeatail } from '@/model/song'
import { toRefs, ref, computed, PropType, Ref, onMounted } from 'vue'
const formatTime = (time: number): string => {
  const addZero = (num: number) => {
    return num < 10 ? '0' + num : '' + num
  }
  const m = Math.floor(time / 60)
  const s = time % 60
  return addZero(m) + ':' + addZero(s)
}

export default (audio: Ref<HTMLMediaElement | undefined>) => {
  /********** 状态 **********/

  // 播放比例
  const playedRatio = ref(0)
  // 总时长
  const duration = ref(0)
  // 播放的时间
  const playedTime = computed(() =>
    Math.round(playedRatio.value * duration.value)
  )
  const formatDuration = computed(() => formatTime(duration.value))
  const formatPlayedTime = computed(() => formatTime(playedTime.value))
  // 播放状态
  const isPlaying = ref(false)

  /********** 动作 **********/

  // 播放/暂停动作
  const onTogglePlay = () => {
    if (!audio.value) return
    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
      audio.value.play()
    } else {
      audio.value.pause()
    }
  }
  // 前进15秒
  const jumpForward15s = () => {
    if (!audio.value || !isPlaying.value) return
    audio.value.currentTime = Math.min(playedTime.value + 15, duration.value)
  }
  // 后退15秒
  const jumpBackward15s = () => {
    if (!audio.value || !isPlaying.value) return
    audio.value.currentTime = Math.max(playedTime.value - 15, 0)
  }

  onMounted(() => {
    if (!audio.value) return
    // 元数据(时长等)加载完成
    audio.value.addEventListener('loadedmetadata', () => {
      if (!audio.value) return
      duration.value = Math.floor(audio.value.duration)
    })
  })

  return {
    playedRatio,
    duration,
    playedTime,
    formatDuration,
    formatPlayedTime,
    isPlaying,
    onTogglePlay,
    jumpForward15s,
    jumpBackward15s,
  }
}
