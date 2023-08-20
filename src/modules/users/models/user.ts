import { DBCollection } from '@constant/DB.collection'
import { Schema, model, Document } from 'mongoose'
import { Gender, UserInfoType } from '../types'
type UserType = UserInfoType & Document
const UserSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      require: true,
      maxlength: 8,
      uppercase: true, // 保存时转换为大写
      trim: true // 保存时候前后去空
    },
    password: {
      type: String,
      require: true,
      select: false // 查询时候不返回给前端
    },
    gender: {
      type: String,
      enum: Gender,
      require: true,
      default: Gender.man
    },
    age: {
      type: Number,
      require: true,
      min: 10,
      max: 80
    },
    isMarry: {
      type: Boolean
    },
    birthDate: {
      type: Date,
      require: true
    },
    createdAt: {
      type: String,
      select: false
    },
    updatedAt: {
      type: String,
      select: false
    },
    __v: { type: Number, select: false }
  },
  {
    // 注意！！！ mongdb默认为UT0时间，查询中国为东八区，需要时间上加8可显示中国时间
    timestamps: { createdAt: 'createdAt', updatedAt: 'createdAt' }
  }
)
UserSchema.statics.allowDrinkUsers = function () {
  return this.find({ age: { $gt: 18 } })
}

const UserModal = model<UserType>('UserModal', UserSchema, DBCollection.USER)
export default UserModal
