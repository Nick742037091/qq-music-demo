import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Response } from '@/model/request'

const axios = Axios.create({
  baseURL: 'dev'
})

const respSuccessInterceptor = (response: AxiosResponse) => {
  return response
}

const respFailInterceptor = (error: AxiosError) => {
  return Promise.reject(error)
}

axios.interceptors.response.use(respSuccessInterceptor, respFailInterceptor)

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<Response<T>> => {
  try {
    const res = await axios.get(url, config)
    return res.data
  } catch (e) {
    throw e
  }
}

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<Response<T>> => {
  try {
    const res = await axios.post(url, data, config)
    return res.data
  } catch (e) {
    throw e
  }
}
export default axios
