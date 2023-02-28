import { Router, Request, Response } from 'express'
const goodsRouters = Router()
goodsRouters.get('/goods', async (req: Request, res: Response) => {
  console.log(req?.params?.id)
  res.send('这是商品信息测试')
})
export default goodsRouters
