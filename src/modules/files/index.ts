import { Router } from 'express'
import fileController from './controller'
const fileRouter = Router()
fileRouter.post('/uploadFile', fileController.uploadFile)
fileRouter.get('/getFile', fileController.getFile)
fileRouter.get('/getUploadedFile/:id', fileController.getUploadImg)
fileRouter.get('/removeUploadedFile/:id', fileController.deleteFile)
export default fileRouter
