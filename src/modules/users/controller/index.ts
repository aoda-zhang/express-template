import boom from '@hapi/boom'
import envConfig from '@config/env'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import UserModal from '../models/user'
const SCRECT_KEY = envConfig?.SCRECT_KEY ?? ''
class User {
  login = (req: Request, res: Response) => {
    // 设置jwtToken
    const userInfo = req?.body
    const token = jwt.sign(
      {
        userId: userInfo.id,
        admin: userInfo?.role === 'admin'
      },
      SCRECT_KEY,
      {
        expiresIn: '24h'
      }
    )
    res.json({
      status: StatusCodes.OK,
      message: 'login success!',
      data: { token }
    })
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    const userInfo = req?.body
    try {
      const userData = await new UserModal(userInfo).save()
      // const userData = await UserModal.findById('64e1e5814fb13aee210130fc')
      res.status(StatusCodes.OK).send(userData)
    } catch (error) {
      next(boom.badRequest)
    }

    // 接受用户信息
    // 查找是否存在用户信息
    // 存在提示
    // 不存在加密存储，并返回用户id角色
    // 加密存储用户密码等
  }

  testToken = (req: Request, res: Response) => {
    // UserModal
    res.status(StatusCodes.OK).send('the word is beautiful')
  }
}
const user = new User()
export default user
