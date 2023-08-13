import { Request, Response } from 'express'
import path from 'path'
import fileService from '../services'
class File {
  // 从后端获取文件
  getFile = async (req: Request, res: Response) => {
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
      res.status(400).json('文件获取失败')
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

  getUploadImg = async (req: Request, res: Response) => {
    const { hash } = req?.params
    const imgInfo = await fileService.getImg(hash)
    return imgInfo
  }
  // 删除文件
  // deleteFile = async () => {
  //   fileService.removeImgByID
  // }
}
const fileController = new File()
export default fileController
