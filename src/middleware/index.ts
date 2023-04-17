import express, { Express } from 'express'
import helmet from 'helmet'
import responseHeader from './responseHeader'
import errorHandle from './errorHandle'
import bodyParser from 'body-parser'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
const initMiddleware = (app: Express) => {
  app.use(express.json())
  // 防止XSS攻击
  app.use(helmet())
  // 统一response
  app.use(responseHeader)
  // prox 代理
  app.use(cors())
  // 限速设置
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
  })
  app.use(apiLimiter)
  // 返回前端json格式数据
  app.use(bodyParser.json())
  // 表单请求使用json数据
  app.use(bodyParser.urlencoded({ extended: false }))
  // 先鉴权，再加载路由
  // jwtToken(app)
  // 错误处理
  app.use(errorHandle)
}
export default initMiddleware
