// export interface Response {
//   code: number
//   msg: string
//   data?: any
// }
export interface Response<T> {
  code: number
  msg: string
  data: T
}
