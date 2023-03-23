import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
const goodsRouters = Router()
goodsRouters.get('/goods/:id', async (req: Request, res: Response) => {
  console.log(req?.params?.id)
  await check('id').isEmail().withMessage('错误的格式').run(req)
  const result = validationResult(req)
  if (result) {
    res.send('格式显示有错误')
  } else {
    res.send('这是商品信息测试')
  }
})
export default goodsRouters
