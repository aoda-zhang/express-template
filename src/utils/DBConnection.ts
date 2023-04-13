import mongoose from 'mongoose'
import envConfig from '../../config/env'
const DBConnection = () => {
  mongoose.connect(envConfig?.DATABASE_URL ?? '')
  const dataBaseConnectState = mongoose.connection
  if (envConfig.NODE_ENV === 'development') {
    dataBaseConnectState.on('error', (error: any) => {
      console.error(`数据库连接出错:${error}`)
    })
    dataBaseConnectState.once('open', () => {
      console.log('数据库连接成功')
    })
    dataBaseConnectState.once('close', () => {
      console.log('数据库断开连接')
    })
  }
}
export default DBConnection
