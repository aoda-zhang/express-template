import envConfig from '@config/env'
const PREFIX = envConfig?.PREFIX ?? '/api'
// 路由白名单  无token校验
const whiteRouters = [`${PREFIX}/user/login`, `${PREFIX}/user/register`]
export default whiteRouters
