import { NextFunction, Request, Response } from 'express'
import path from 'path'
import fileService from '../services'
import boom from '@hapi/boom'
import { StatusCodes } from 'http-status-codes'

class File {
  // 从后端获取文件
  getFile = async (req: Request, res: Response, next: NextFunction) => {
    const { fileName = '' } = req.query
    try {
      // 此处必须注意亮点
      // 1.使用path.resolve来处理文件路径
      // 2.注意存放文件的相对地址
      fileName
        ? res.download(
            path.resolve(__dirname, '../../../../assets/files/night.jpg'),
            // @ts-ignore
            fileName
          )
        : res.download(
            path.resolve(__dirname, '../../../../assets/files/night.jpg')
          )
    } catch (error) {
      next(boom.badRequest('文件获取失败'))
    }
  }

  // 上传文件
  uploadFile = async (req: Request, res: Response) => {
    const fileData = req.body
    try {
      const response = await fileService.uploadImg(fileData)
      if (response.status === 200) {
        res.status(200).send(response.data)
      }
    } catch (error) {
      // 后端错误处理
      res.status(400).send('错误请求')
    }
  }
  // 获取已经上传的文件

  getUploadImg = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req?.params
    try {
      const imgInfo = await fileService.getImg(id)
      res.status(StatusCodes.OK).send(imgInfo)
    } catch (error) {
      next(boom.badRequest(`${error}`))
    }
  }

  // 删除文件
  deleteFile = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req?.params
    try {
      const imgDeleteInfo = await fileService.removeImgByID(id)
      res.status(StatusCodes.OK).send(imgDeleteInfo)
    } catch (error) {
      next(boom.badRequest(`${error}`))
    }
  }
}
const fileController = new File()
export default fileController
