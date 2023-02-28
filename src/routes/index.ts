import express, { Router, Express } from 'express'
import goodsRouters from '../modules/goods/api'
import loginRoute from '../modules/login/route'
import usersRouters from '../modules/users/route'
// 无token路由
export const noTokenRouters = ['/login', '/welcome']
const initRouter = (app: Express) => {
  const PREFIX = process?.env?.PREFIX ?? '/api'
  const path = require('path')
  const routeRender: Router[] = [loginRoute, goodsRouters, usersRouters]
  app.use(express.static(path.join(__dirname, 'public')))
  app.get('/', (req, res) => {
    res.send('默认页面')
  })
  // app.use(express.static('/public'))
  // 全局路由前缀+路由中间件

  app.use(PREFIX, routeRender)
  app.use('*', async (req, res) => {
    // 跳转默认路由
    res.send('默认页面')
  })
}
export default initRouter
