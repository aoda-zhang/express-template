import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})
export default {
  // 当前环境
  NODE_ENV: process.env.NODE_ENV,
  // 运行端口
  PORT: process.env.PORT,
  // 加密key
  SCRECT_KEY: process.env.SCRECT_KEY,
  // 数据库连接
  DATABASE_URL: process.env.DATABASE_URL,
  // 全局API前缀
  PREFIX: process.env.DATABASE_URL
}
