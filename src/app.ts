import express from 'express'
import env from '../config/env'
import initMiddleware from './middleware'
import initRouter from './routes'
import DBConnection from './utils/DBConnection'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
})

const app = express()
// 安全设置
app.use(helmet())
// prox 代理
app.use(cors())
// 路由注册
initRouter(app)
// 中间件注册
initMiddleware(app)
// 限速设置
app.use(apiLimiter)
// 数据库连接
DBConnection()

const PORT = env?.PORT ?? 8080
app.listen(PORT, () => {
  // 开发环境说明
  console.log(`本地开发运行在: http://localhost:${PORT}`)
})
