import { Request, NextFunction } from 'express'
const errorHandle = (
  err: { name: string },
  req: Request,
  res: {
    statusCode: number
    send: (arg0: { status: number; message: string }) => void
  },
  next: NextFunction
) => {
  let code = 500
  let message = 'Internal Server Error'
  // token解析的错误
  if (err.name === 'UnauthorizedError') {
    code = 401
    message = 'no login'
  }
  res.statusCode = code
  res.send({
    status: code,
    message
  })
}
export default errorHandle