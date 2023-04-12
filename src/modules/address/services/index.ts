import { AddressType } from './../../../models/address'
import AddressModal from '../../../models/address'
class AddressService {
  // CRUD demo
  // -----------create-----------
  addAddress = async (data: AddressType) => {
    try {
      await new AddressModal(data).save()
    } catch (error) {
      throw Error('save error')
    }
  }

  // -----------read-----------

  // get all the data

  getAllAddress = async () => {
    try {
      return await AddressModal.find()
    } catch (error) {
      throw Error('find error')
    }
  }

  // get address by id
  getAddressByID = async (id: string) => {
    try {
      return await AddressModal.findById(id)
    } catch (error) {
      throw Error('find error')
    }
  }

  // get address by address name
  getAddressByName = async (name: string) => {
    try {
      return await AddressModal.findOne({ name })
    } catch (error) {
      throw Error('find error')
    }
  }

  // -----------update-----------

  // update one address for some field

  updateAddressByID = async (id: string, data: AddressType) => {
    try {
      return await AddressModal.updateOne(
        { name: 'Central Perk Cafe' },
        { $set: { name: 'test data' } }
      )
    } catch (error) {
      throw Error('find error')
    }
  }

  // -----------delete-----------
  // remove one address by id
  removeAddressByID = async (id: string) => {
    try {
      return await AddressModal.findByIdAndRemove(id)
    } catch (error) {
      throw Error('find error')
    }
  }
}
const addressService = new AddressService()
export default addressService
