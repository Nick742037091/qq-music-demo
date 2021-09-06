import store from '@/store'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import { SongDeatail } from '@/model/song'
import { fetchSongList } from '@/api/song'

// 使用vuex-module-decorators，增强类型推导功能
@Module({ dynamic: true, store, name: 'song', namespaced: true })
class SongModule extends VuexModule {
  songList: SongDeatail[] = []
  songIndex = 0

  get songDetail() {
    return this.songList[this.songIndex] || {}
  }

  @Mutation
  setSongList(payload: SongDeatail[]) {
    this.songList = payload
  }

  @Mutation
  setSongIndex(payload: number) {
    this.songIndex = payload
  }

  @Action
  async getSongList() {
    const { code, data } = await fetchSongList()
    if (code !== 0) return
    this.setSongList(data)
  }
}

export default getModule(SongModule)
