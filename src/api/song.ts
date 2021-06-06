import { get } from './baseRequest'
import { SongDetailResponse } from '@/model/song'

export const fetchSongDetail = (): Promise<SongDetailResponse> => {
  return get('/song/detail')
}
