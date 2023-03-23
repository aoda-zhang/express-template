import express, { Express } from 'express'
import helmet from 'helmet'
import responseHeader from './responseHeader'
import errorHandle from './errorHandle'
const initMiddleware = (app: Express) => {
  app.use(express.json())
  // 防止XSS攻击
  app.use(helmet())
  // 统一response
  app.use(responseHeader)
  // 先鉴权，再加载路由
  // jwtToken(app)
  // 错误处理
  app.use(errorHandle)
}
export default initMiddleware
