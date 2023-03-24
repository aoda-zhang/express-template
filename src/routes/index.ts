import express, { Router, Express } from 'express'
import path from 'path'
import goodsRouters from '../modules/goods/router'
import loginRoute from '../modules/login/route'
import usersRouters from '../modules/users/route'
const PREFIX = process?.env?.PREFIX ?? '/api'
// 无token路由
export const noTokenRouters = ['/', `/${PREFIX}/goods/`, `/${PREFIX}/login/`]
// 各模块注册路由
const routeRender: Router[] = [loginRoute, goodsRouters, usersRouters]
const initRouter = (app: Express) => {
  // 前端静态资源加载
  app.use(express.static('public'))
  // 全局路由前缀+路由中间件
  app.use(PREFIX, routeRender)
  app.use('*', (req, res) => {
    // 默认跳转页面，一般为site首页
    res.sendFile(path.resolve('assets/views/index.html'))
  })
}
export default initRouter
