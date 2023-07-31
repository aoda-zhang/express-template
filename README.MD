# express 工程化实践说明

## 文件夹结构说明

```tsx
├─ .github
│  └─ workflows  // github action 文件，github会扫描此路径下的所有yml文件，并根据内容运行具体脚本
├─ .gitignore    	// 项目中不允许提交的code在此记录
├─ .prettierrc   // prettier格式化设置
├─ .vscode
│  └─ launch.json  // 使用vscode运行后端项目的debbuger设置
├─ README.MD
├─ config  
│  └─ env   // 不同的化境变量文件
│     └─ index.ts
├─ src
│  ├─ app.ts	// 项目入口文件
│  ├─ constant // 项目常量文件夹
│  │  ├─ enum
│  │  └─ interface
│  ├─ core	// 项目工程化集成，如数据库，log日志，项目监控等
│  ├─ middleware	// 项目中间件
│  │  ├─ global		// 全局中间件
│  │  └─ sub			// 非全局中间件
│  ├─ modules			// 具体的业务模块
│  │  ├─ address	// 遵循MVC模式				
│  │  │  ├─ controller	// controller层处理路由
│  │  │  │  └─ index.ts
│  │  │  ├─ models	// DB数据模型
│  │  │  │  └─ address
│  │  │  │     └─ index.ts
│  │  │  └─ services	// 处理具体DB和service操作
│  │  │     └─ index.ts
│  │  │  └─ index.ts	// 外层路由注册
│  └─ utils	// 工具函数
├─ tsconfig.json	// ts项目设置

```

## 启动方式
```ts
yarn run dev 或 npm run dev
```



## 路径别名设置
> 对于大型项目而言，往往会有很多层级的文件夹，我们总会看到诸如“../../../../”这样的路径引入，想必开发者对此吐槽不少，因此路径别名就非常有用来解决这一问题

一：vscode 插件安装

> Path Intellisense         Path Intellisense

二：lib包引入

> ```ts
> yarn add tsconfig-paths ts-node nodemon tsc-alias
> ```
三：tsconfig.json配置具体路径别名

> ```ts
> {
>   "compilerOptions": {
>     "baseUrl": ".",
>     "paths": {
>       "@utils/*": ["src/utils/*"],  // 此处根据自己的实际项目来配置
>       "@constant/*": ["src/constant/*"],
>       "@core/*": ["src/core/*"],
>       "@modules/*": ["src/modules/*"],
>       "@subMiddleware/*": ["src/middleware/sub/*"]
>     }
>   }
> }

四：Package.json 设置开发和打包脚本

> ```ts
> {
>   "scripts": {
>     // 本地开发路径别名处理
>     "dev": "cross-env NODE_ENV=develop nodemon -e ts --exec ts-node -r tsconfig-paths/register --files src/app.ts",
>     
>     // 打包路径别名处理
>     "build": "cross-env NODE_ENV=production tsc && tsc-alias",
>   },
> }



## 开发热更新

> nodemon 可监控文件变动并重新加载，express项目在开发中可使用nodemon来启动项目，从而达到开发热更新
```ts
// path:package.json
 "scripts": {
     "dev": "cross-env NODE_ENV=develop nodemon -e ts --exec ts-node -r tsconfig-paths/register --files src/app.ts"
  },

```

## 环境变量设置

dotenv

## 日志请求查看

## 数据库配置
```ts
// 以mogodb连接为例
import mongoose from 'mongoose'
const DBConnection = () => {
  mongoose.connect(你的数据库连接字符串)
  const dataBaseConnectState = mongoose.connection
  // 本地开发可选择监听数据库的连接状态
  if (envConfig.NODE_ENV === 'dev') {
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


// 入口文件app.js中调用

```

## 请求统一封装

## 中间件

## 跨域请求
> 实际项目中，考虑到负载均衡等因素，前后端往往部署在不同的服务器中，因此开发过程中，后端API需开启跨域请求，前端才可进行调试

```ts
1. yarn add cors
// 入口文件app.js中调用
2. app.use(cors())
```
## 加密
## 错误处理
helmet
## 参数验证

## JWT

## vscode 中 debugger 调试
```ts
// 文件夹.vscode/lanuch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "console": "internalConsole",
      "name": "调试express",
      "skipFiles": ["node_modules/**"],
      // 项目的入口文件
      "args": ["${workspaceRoot}/src/app.ts"],
      // 将ts转换为js的配置，需要找到自己安装ts-node的绝对路径
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "restart": true,
      "cwd": "${workspaceRoot}",
      "internalConsoleOptions": "neverOpen",
      "autoAttachChildProcesses": true,
      // 本地开发使用的环境变量文件
      "envFile": "${workspaceFolder}/config/env/dev.env"
    }
  ]
}

```

## NODE应用部署需要注意什么？

### NODE版本设置

> NODE应用在部署时可单独设置运行的node版本，当然可以在package.json中设置node版本

```ts
// package.json
{
  "engines": {
    "node": "18.14.2",
    "npm": "9.5.0"
  }
}

```

### prod运行脚本设置

> 通常node应用与前端应用相同，都需要经过打包的流程，prod运行node应用，需要先将项目打包，之后使用node命令运行打包后路径中的入口文件即可

```ts
// package.json
// 此项目打包后的文件夹为build,入口文件为app.js

{
    "scripts": {
    "start:prod": "node build/src/app.js",
  },
}
```

### 环境变量替换

> 通常在开发中，我们会有多种环境，如dev，test，prod，通过使用cros-env 来设置不同的环境，我们能够达到区分不同环境的效果，任何现代部署环境中，都会有环境变量替换，我们只需要替换掉prod环境中的key value即可



1. 返回数据中如何隐藏部分数据

   

2. 创建和更新时间如何进行数据格式转换

3.不同环境配置不同的json文件
4.跨域设置允许请求的地址
