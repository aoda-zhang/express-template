import mongoose from 'mongoose'
const Schema = mongoose.Schema
const AddressSchema = new Schema({
  value: {
    type: String,
    require: true
  }
})
const AddressModal = mongoose.model('AddressModal', AddressSchema, 'Address')
export default AddressModal
