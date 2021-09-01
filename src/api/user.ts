import { post } from './baseRequest'
import { User } from '@/model/user'

export const login = () => {
  return post<User>('/user/login')
}
