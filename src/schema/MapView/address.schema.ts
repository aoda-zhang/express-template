import mongoose from 'mongoose'
const AddressSchema = new mongoose.Schema({
  value: {
    type: String,
    require: true
  }
})
const AddressModal = mongoose.model('AddressModal', AddressSchema)
export default AddressModal
