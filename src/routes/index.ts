import { Router } from 'express'
import goodsRouters from '../modules/goods/api'
import loginRoute from '../modules/login/route'
import usersRouters from '../modules/users/route'
const defalutRoute = Router()
export const noTokenRouters = ['/login', '/welcome']
defalutRoute.get('/', (req, res) => {
  // 跳转默认地址
  res.send('欢迎来到todoList测试')
})

const routeRender: Router[] = [
  defalutRoute,
  loginRoute,
  goodsRouters,
  usersRouters
]

export default routeRender
