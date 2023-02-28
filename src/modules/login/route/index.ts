import { Router } from 'express'
import jwt from 'jsonwebtoken'
const SCRECT_KEY = process.env.SCRECT_KEY ?? ''
const loginRoute = Router()
loginRoute.post('/login', async (req, res) => {
  // 设置jwt
  const userName = req?.params
  const passWord = req?.params
  const token = jwt.sign({ user: { userName, passWord } }, SCRECT_KEY, {
    // 过期时长
    expiresIn: '2000h'
  })
  res.send({
    status: 200,
    message: 'login success!',
    token
  })
})
export default loginRoute
