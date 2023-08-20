interface CommonError {
  code: string
  name: string
  status: number
  message: string
  stack: string
}
interface BoomError {
  data: any
  isBoom: boolean
  isServer: boolean
  output: {
    statusCode: number
    headers: object
    payload: {
      statusCode: number
      error: string
      message: string
    }
  }
}
export enum Httpconts {
  badRequest = 'Bad Request',
  autuError = 'UnauthorizedError',
  loginAgain = '登陆过期,请重新登录',
  systemError = 'Internal Server Error'
}
export type Errors = CommonError & BoomError
