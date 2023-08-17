import { NextFunction, Request, Response } from 'express'
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
type Errors = Error & BoomError
const errorHandle = (
  err: Errors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorCode = 500
  let errorMessage = 'Bad Request'
  let stack = 'Bad Request'
  const path = req?.url
  if (err?.message === 'UnauthorizedError') {
    errorCode = 401
    errorMessage = 'no access'
  }
  if (err?.isBoom) {
    errorCode = err?.output?.statusCode ?? 500
    errorMessage = err?.output?.payload?.message ?? 'Internal Server Error'
    stack = err?.stack ?? 'Internal Server Error'
  }
  return res.status(errorCode).send({
    errorCode,
    errorMessage,
    path,
    stack
  })
}
export default errorHandle
