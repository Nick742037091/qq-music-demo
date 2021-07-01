import { computed } from 'vue'
import SongStore from '@/store/song'
import FAVORITE_ACTIVE_ICON from '@/assets/favorite-active.png'
import FAVORITE_INACTIVE_ICON from '@/assets/favorite-inactive.png'

export default () => {
  // 歌曲详情
  const songDetail = computed(() => SongStore.songDetail)
  const rowLyric = computed(() => '我的爱明明还在')
  /* ****** 收藏歌曲 *******/
  const favoriteIcon = computed(() =>
    songDetail.value.isFavorite ? FAVORITE_ACTIVE_ICON : FAVORITE_INACTIVE_ICON
  )
  const onToggleFavorite = () => {
    songDetail.value.isFavorite = !songDetail.value.isFavorite
  }
  /* ****** 关注歌手 *******/
  const likeSingerStatus = computed(() =>
    songDetail.value.likeSinger ? '已关注' : '关注'
  )
  const likeStatusClass = computed(() => {
    const cls = 'like '
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
    songDetail
  }
}
