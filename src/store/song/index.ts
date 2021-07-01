import { Module, MutationTree, ActionTree } from 'vuex'
import { SongState } from './types'
import { SongDeatail } from '@/model/song'
import { fetchSongDetail } from '@/api/song'

const state: SongState = {
  songDetail: {},
}

const mutations: MutationTree<SongState> = {
  setSongDetail(state, payload: SongDeatail) {
    state.songDetail = payload
  },
}

const actions: ActionTree<SongState, null> = {
  async getSongDetail({ commit }) {
    const { code, data } = await fetchSongDetail()
    if (code !== 0) return
    commit('setSongDetail', data)
  },
}
const module: Module<SongState, null> = {
  namespaced: true,
  state,
  mutations,
  actions,
}
export default module
