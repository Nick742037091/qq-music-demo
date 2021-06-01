import { SongDeatail } from '@/model/song'
import { toRefs, ref, computed, PropType } from 'vue'
const formatTime = (time: number): string => {
  const addZero = (num: number) => {
    return num < 10 ? '0' + num : '' + num
  }
  const m = Math.floor(time / 60)
  const s = time % 60
  return addZero(m) + ':' + addZero(s)
}

export default (props: { songDetail: SongDeatail }) => {
  const { songDetail } = toRefs(props)
  // 播放比例
  const playedRatio = ref(0)
  // 总时长
  const duration = computed(() => songDetail.value.duration || 0)
  // 播放的时间
  const playedTime = computed(() =>
    Math.round(playedRatio.value * duration.value)
  )
  const formatDuration = computed(() => formatTime(duration.value))
  const formatPlayedTime = computed(() => formatTime(playedTime.value))
  return { playedRatio, duration, playedTime, formatDuration, formatPlayedTime }
}
