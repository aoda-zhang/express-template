import express, { Express } from 'express'
import helmet from 'helmet'
import routeRender from '../routes'
import jwtAuth from './JWT'
import responseHeader from './responseHeader'

const initMiddleware = (app: Express) => {
  app.use(express.json())
  // 防止XSS攻击
  app.use(helmet())
  app.use(responseHeader)
  // 先鉴权，再加载路由
  jwtAuth(app)
  // 路由中间件
  app.use(routeRender)
}
export default initMiddleware
