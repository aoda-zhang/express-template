import { Schema, model, Document } from 'mongoose'
import { DBCollection } from '../../constant/enum/DBCollection'
export interface AddressType extends Document {
  value: string
}
const AddressSchema = new Schema({
  value: {
    type: String,
    require: true
  }
})
const AddressModal = model<AddressType>(
  'AddressModal',
  AddressSchema,
  DBCollection.ADDRESS
)
export default AddressModal
