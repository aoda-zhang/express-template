import { Router } from 'express'
import addressController from '../controller'
const addressRouters = Router()
// 增加一条地址信息
addressRouters.post('/address/add', addressController.addAddress)
// 查询地址列表
addressRouters.get('/address', addressController.getAddress)
// 查询地址详情
addressRouters.get('/address/:id', addressController.getAddress)
export default addressRouters
