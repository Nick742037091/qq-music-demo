import { get } from './baseRequest'
import { SongDeatail } from '@/model/song'

export const fetchSongDetail = () => {
  return get<SongDeatail>('/song/detail')
}

export const fetchSongList = () => {
  return get<SongDeatail[]>('/song/list')
}
