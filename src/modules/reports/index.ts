import { Router } from 'express'
import reportController from './controller'
const reportRouter = Router()
reportRouter.get('/report', reportController.getReport)
export default reportRouter
