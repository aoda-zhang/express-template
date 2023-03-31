import { AddressType } from './../../../models/address'
import AddressModal from '../../../models/address'
class AddressService {
  // 增
  addAddress = async (data: AddressType) => {
    try {
      await new AddressModal(data).save()
    } catch (error) {
      throw Error('灭蝇')
    }
  }
  // AddressModal.save()
  // 删
  // 查

  // 查询所有文档数据
  getAddress = async (id: string) => {
    if (id) {
      return await AddressModal.findById(id)
    }
    return await AddressModal.find()
  }

  // 查询单个文档数据

  // 改
}
const addressService = new AddressService()
export default addressService
