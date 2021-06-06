import { ref } from 'vue'

import { SongDeatail } from '@/model/song'
import { fetchSongDetail } from '@/api/song'

export default () => {
  let songDetail = ref<SongDeatail>({
    poster: '',
    lyric: '',
    name: '',
    singer: '',
    isFavorite: false,
    likeSinger: false,
    duration: 0,
  })
  const getSongDetail = async () => {
    const { code, data } = await fetchSongDetail()
    if (code !== 0) return
    songDetail.value = data
  }
  return {
    songDetail,
    getSongDetail,
  }
}
