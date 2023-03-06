import mongoose from 'mongoose'
const connectDB = () => {
  const dataBaseURL = process.env.DATABASE_URL ?? ''
  mongoose.connect(dataBaseURL)
  const dataBaseConnectState = mongoose.connection
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
export default connectDB
