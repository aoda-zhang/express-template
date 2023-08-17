import express from 'express'
import initGlobalMiddleware from './middleware/global'
import initRouter from './routes'
import DBConnection from '@core/DBConnection'
import envConfig from '@config/env'
const app = express()
// 数据库连接
DBConnection()
// 中间件注册
initGlobalMiddleware(app)
// 路由注册
initRouter(app)
const PORT = envConfig?.PORT ?? 8080
app.listen(PORT, () => {
  if (envConfig.NODE_ENV === 'dev') {
    // 开发环境说明
    console.log(`本地开发运行在: http://localhost:${PORT}`)
  }
})
