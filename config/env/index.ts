import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})
export default {
  PORT: process.env.PORT,
  SCRECT_KEY: process.env.SCRECT_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  PREFIX: process.env.DATABASE_URL
}
