import { Request, Response } from 'express'
import addressService from '../services'
class AddressController {
  // 增
  //   addAddress(req: Request, res: Response) {}
  // 删

  // 查

  // 查询地址列表
  getAddressList = async (req: Request, res: Response) => {
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
