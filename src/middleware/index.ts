import express, { Express } from 'express'
import helmet from 'helmet'
import routeRender from '../routes'
// import jwtAuth from './jwtToken'
import responseHeader from './responseHeader'
// import connectDataBase from './dataBaseConnect'
const PREFIX = process?.env?.PREFIX ?? '/api'

const initMiddleware = (app: Express) => {
  app.use(express.json())
  // 防止XSS攻击
  app.use(helmet())
  app.use(responseHeader)
  // 先鉴权，再加载路由
  // jwtAuth(app)
  // 全局路由前缀+路由中间件
  app.use(PREFIX, routeRender)
  // 连接数据库
  // connectDataBase()
}
export default initMiddleware
