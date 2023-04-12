import { Schema, model, Document } from 'mongoose'
import { DBCollection } from '../../constant/enum/DBCollection'
export interface AddressType extends Document {
  name: string
}
const AddressSchema = new Schema<AddressType>(
  {
    name: {
      type: String,
      require: true
    }
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: 'created',
      updatedAt: 'updated'
    }
  }
)
const AddressModal = model<AddressType>(
  'AddressModal',
  AddressSchema,
  DBCollection.ADDRESS
)
export default AddressModal
