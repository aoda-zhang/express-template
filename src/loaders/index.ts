import { Express } from 'express'
import connectDB from './connect-db'
import initMiddleware from './init-middleware'
import initRouter from './init-router'
const appLoader = (app: Express) => {
  // 数据库连接
  connectDB()
  // 中间件注册
  initMiddleware(app)
  // 路由注册
  initRouter(app)
}
export default appLoader
