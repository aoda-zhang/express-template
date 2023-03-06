import express from 'express'
import env from '../config/env'
import appLoader from './loaders'
const app = express()
appLoader(app)
const PORT = env?.PORT ?? 8080
app.listen(PORT, () => {
  // 开发环境说明
  console.log(`本地开发运行在: http://localhost:${PORT}`)
})
