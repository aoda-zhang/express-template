import { Errors, Httpconts } from '@constant/httpType'
import { NextFunction, Request, Response } from 'express'
const errorHandle = (
  err: Errors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err?.status ?? 500
  let message = err?.message ?? Httpconts.badRequest
  let stack = err?.stack ?? Httpconts.badRequest
  const path = req?.url
  if (err?.name === Httpconts.autuError) {
    statusCode = 401
    message = err?.message ?? Httpconts.loginAgain
  }
  if (err?.isBoom) {
    statusCode = err?.output?.statusCode ?? 500
    message = err?.output?.payload?.message ?? Httpconts.systemError
    stack = err?.stack ?? Httpconts.systemError
  }
  return res.status(statusCode).send({
    statusCode,
    message,
    path,
    stack
  })
}
export default errorHandle
