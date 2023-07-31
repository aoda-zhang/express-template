import { Request, Response } from 'express'
import path from 'path'
class Report {
  getReport = async (req: Request, res: Response) => {
    try {
      // 此处必须注意亮点
      // 1.使用path.resolve来处理文件路径
      // 2.注意存放文件的相对地址
      res.download(
        path.resolve(__dirname, '/../../../../assets/files/night.jpg')
      )
    } catch (error) {
      res.status(400).json('文件获取失败')
    }
  }
}
const reportController = new Report()
export default reportController

// 通过远程地址获取文件
