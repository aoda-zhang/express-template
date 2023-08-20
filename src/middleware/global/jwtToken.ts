import { Express, Request } from 'express'
import { expressjwt } from 'express-jwt'
import whiteListRouters from '../../routes/whitelistRoute'
const jwtToken = (app: Express) => {
  const SCRECT_KEY = process.env.SCRECT_KEY ?? ''
  app.use(
    expressjwt({
      secret: SCRECT_KEY,
      requestProperty: 'auth', // 通过req.auth可访问jwToken解析的内容
      algorithms: ['HS256'], // 使用何种加密算法解析
      // @ts-ignore
      getToken (req: Request) {
        if (req?.headers?.authorization?.split(' ')[0] === 'Bearer') {
          return req?.headers?.authorization?.split(' ')[1]
        } else if (req?.headers?.token) {
          return req?.headers?.token
        }
        return null
      }
    }).unless({ path: whiteListRouters }) // 无需验证token的路由
  )
}
export default jwtToken
