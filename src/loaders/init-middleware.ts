import express, { Express } from 'express'
import helmet from 'helmet'
import middleware from '../middleware'
const initMiddleware = (app: Express) => {
  app.use(express.json())
  // 防止XSS攻击
  app.use(helmet())
  app.use(middleware.responseHeader)
  // 先鉴权，再加载路由
  // middleware.jwtToken(app)
}
export default initMiddleware
