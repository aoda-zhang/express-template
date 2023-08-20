import { Router } from 'express'
import user from './controller'
const userRoute = Router()
userRoute.post('/user/login', user.login)
userRoute.post('/user/register', user.register)
userRoute.get('/user/testToken', user.testToken)
export default userRoute
