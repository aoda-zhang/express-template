// @ts-nocheck
import envConfig from '@config/env'
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosError
} from 'axios'
const Http = axios.create({
  timeout: 20000,
  baseURL: envConfig.BASE_URL
})
// 自定义请求头
const customHeaders = {
  Accept: 'application/json'
}

// 成功请求config处理
const interceptorsReq = (config: AxiosRequestHeaders) => {
  config.headers = { ...config.headers, ...customHeaders }
  return config
}

const errorHandler = (error: any) => {
  // 错误处理
  console.error(error)
}

// 请求拦截处理
// @ts-ignore
Http.interceptors.request.use(interceptorsReq, err => {
  errorHandler(err)
  return Promise.reject(err?.message)
})

// 成功响应拦截处理
const interceptorsResSuccess = <T>(response: AxiosResponse<T>) => {
  if (
    response.status >= 200 &&
    response.status < 400 &&
    response?.statusText === 'OK'
  ) {
    return Promise.resolve(response?.data)
  } else {
    errorHandler(response.status)
    return Promise.reject()
  }
}
// 响应拦截处理
Http.interceptors.response.use(interceptorsResSuccess, (error: AxiosError) => {
  errorHandler(error?.message)
  return Promise.reject(error)
})
const httpRequest = {
  getAPI<T = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return Http.get<T>(url, { params, ...config })
  },
  deleteAPI<T = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return Http.delete<T>(url, { params, ...config })
  },
  postAPI<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return Http.post<T>(url, data, { ...config })
  },
  putAPI<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return Http.put<T>(url, data, { ...config })
  }
}
export default httpRequest
