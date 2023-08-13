import { Router } from 'express'
import fileController from './controller'
const fileRouter = Router()
fileRouter.post('/uploadFile', fileController.uploadFile)
fileRouter.get('/getFile', fileController.getFile)
fileRouter.get('/getUploadedFile', fileController.getUploadImg)
export default fileRouter
