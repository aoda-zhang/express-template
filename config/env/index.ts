import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})
const envConfig = {
  // 全局请求baseURl
  BASE_URL: process.env.BASE_URL,
  API_KEY: process.env.API_KEY,
  // file 模块
  FILE: {
    baseURL: process.env.REPORT_BASE_URL
  },
  // 当前环境
  NODE_ENV: process.env.NODE_ENV,
  // 运行端口
  PORT: process.env.PORT,
  // 加密key
  SCRECT_KEY: process.env.SCRECT_KEY,
  // 数据库连接
  DATABASE_URL: process.env.DATABASE_URL,
  // 全局API前缀
  PREFIX: process.env.PREFIX
}
export default envConfig
