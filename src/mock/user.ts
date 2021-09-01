import Mockjs from 'mockjs'
import { mockInt, mockName } from './common'

Mockjs.mock(/user\/login/, 'post', () => {
  return {
    code: 0,
    msg: '',
    data: {
      name: mockName(),
      nickname: mockName(),
      age: mockInt(),
      sex: mockInt()
    }
  }
})
