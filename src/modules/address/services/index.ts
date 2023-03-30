import AddressModal from '../../../models/address'
class AddressService {
  // 增
  // AddressModal.save()
  // 删
  // 查
  getAddress = async (id: String) => {
    return await AddressModal.find()
  }
  // 改
}
const addressService = new AddressService()
export default addressService
