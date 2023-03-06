import { Express } from 'express'
// import connectDB from './connect-db'
import initMiddleware from './init-middleware'
import initRouter from './init-router'
const appLoader = (app: Express) => {
  // connectDB()
  initMiddleware(app)
  initRouter(app)
}
export default appLoader
