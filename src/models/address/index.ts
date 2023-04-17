import { Schema, model, Document } from 'mongoose'
import { DBCollection } from '../../constant/enum/DBCollection'
export interface AddressType extends Document {
  name: string
  direction?: string
}
const AddressSchema = new Schema<AddressType>(
  {
    name: {
      type: String,
      require: true
    },
    __v: {
      type: Number,
      select: false
    },
    direction: {
      type: String,
      enum: ['North', 'South'],
      default: 'North',
      // select 查询时不向前端展示的字段
      select: false
    }
  },
  {
    // 注意！！！ mongdb默认为UT0时间，查询中国为东八区，需要时间上加8可显示中国时间
    timestamps: true
  }
)
const AddressModal = model<AddressType>(
  'AddressModal',
  AddressSchema,
  DBCollection.ADDRESS
)
export default AddressModal
