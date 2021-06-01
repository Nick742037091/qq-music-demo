import { Response } from '@/model/request'

export interface SongDeatail {
  poster: string
  lyric: string
  name: string
  singer: string
  isFavorite: boolean
  likeSinger: boolean
  duration: number
}

export interface SongDetailResponse extends Response {
  data: SongDeatail
}
