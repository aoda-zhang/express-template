import express from 'express'
import envConfig from '../config/env'
import initGlobalMiddleware from './middleware/global'
import initRouter from './routes'
import DBConnection from '@core/DBConnection'
const app = express()
// 中间件注册
initGlobalMiddleware(app)
// 路由注册
initRouter(app)
// 数据库连接
DBConnection()
const PORT = envConfig?.PORT ?? 8080
app.listen(PORT, () => {
  if (envConfig.NODE_ENV === 'dev') {
    // 开发环境说明
    console.log(`本地开发运行在: http://localhost:${PORT}`)
  }
})
