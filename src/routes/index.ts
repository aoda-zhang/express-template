import express, { Router, Express } from 'express'
import path from 'path'
import userRoute from '@modules/users'
import addressRouters from '@modules/address'
import fileRouter from '@modules/files'
import errorHandle from 'src/middleware/global/errorHandle'
import 'express-async-errors'
import envConfig from '@config/env'
const PREFIX = envConfig?.PREFIX ?? '/api'
// 各模块注册路由
const routeRender: Router[] = [userRoute, addressRouters, fileRouter]
const initRouter = (app: Express) => {
  // 前端静态资源加载
  app.use(express.static('public'))
  // 全局路由前缀+路由中间件
  app.use(PREFIX, routeRender)
  app.use('*', (req, res) => {
    // 默认跳转页面，一般为site首页
    res.sendFile(path.resolve('assets/views/index.html'))
  })
  app.use(errorHandle)
}
export default initRouter
