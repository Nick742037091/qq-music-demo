import { SongDeatail } from '@/model/song'
import { toRefs, computed } from 'vue'
export default (props: { songDetail: SongDeatail }) => {
  const { songDetail } = toRefs(props)
  const rowLyric = computed(() => '我的爱明明还在')
  /* ****** 收藏歌曲 *******/
  const favoriteIcon = computed(() =>
    // TODO 这里为啥不用require
    songDetail.value.isFavorite
      ? 'src/assets/favorite-active.png'
      : 'src/assets/favorite-inactive.png'
  )
  const onToggleFavorite = () => {
    songDetail.value.isFavorite = !songDetail.value.isFavorite
  }
  /* ****** 关注歌手 *******/
  const likeSingerStatus = computed(() =>
    songDetail.value.likeSinger ? '已关注' : '关注'
  )
  const likeStatusClass = computed(() => {
    let cls = 'like '
    return (
      cls + (songDetail.value.likeSinger ? 'like--active' : 'like--inactive')
    )
  })
  const onToggleLikeSinger = () => {
    songDetail.value.likeSinger = !songDetail.value.likeSinger
  }
  return {
    rowLyric,
    favoriteIcon,
    onToggleFavorite,
    likeSingerStatus,
    onToggleLikeSinger,
    likeStatusClass,
  }
}
