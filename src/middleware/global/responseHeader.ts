import { Request, Response, NextFunction } from 'express'

const responseHeader = (req: Request, res: Response, next: NextFunction) => {
  // 允许头部字段
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // 允许公开的头部字段
  res.header('Access-Control-Expose-Headers', 'Content-Disposition')
  // 允许的请求方式
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  // 允许携带cookie
  res.header('Access-Control-Allow-Credentials', 'true')

  // 预检返回204
  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
  } else {
    next()
  }
}

export default responseHeader
