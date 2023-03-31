import { Request, Response } from 'express'
import AddressModal from '../../../models/address'
import addressService from '../services'
class AddressController {
  // 增
  addAddress = async (req: Request, res: Response) => {
    const data = req?.query?.value
    try {
      await addressService.addAddress(data)
      res.status(200).json('保存成功')
    } catch (error) {
      res.status(400).json('保存失败')
    }
  }
  // 删

  // 查
  getAddress = async (req: Request, res: Response) => {
    const id = req?.params?.id
    try {
      const data = await addressService.getAddress(id)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).send('错误请求')
    }
  }

  // 查询单个地址详情

  // 改
}
const addressController = new AddressController()
export default addressController
