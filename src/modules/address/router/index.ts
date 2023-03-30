import { Router } from 'express'
import addressController from '../controller'
const addressRouters = Router()
// 增加一条地址信息
// addressRouters.get('/goods/:id', addressController.addAddress)
// 查询地址详情
// addressRouters.get('/goods/:id', addressController.getAddressDetail)
// 查询地址列表
addressRouters.get('/address', addressController.getAddressList)
// 查询地址详情
// addressRouters.get('/address/:id', addressController.getAddressDetail)
export default addressRouters
