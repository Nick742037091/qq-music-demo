import store from '@/store'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import { User } from '@/model/user'
import { login } from '@/api/user'

// 使用vuex-module-decorators，增强类型推导功能
@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
  userInfo: User | null = null

  @Mutation
  setUserInfo(payload: User) {
    this.userInfo = payload
  }

  @Action
  async login() {
    const { code, data } = await login()
    if (code !== 0) return
    this.setUserInfo(data)
  }
}

export default getModule(UserModule)
