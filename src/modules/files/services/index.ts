import envConfig from '@config/env'
import httpRequest from '@core/http'
import { AxiosRequestConfig } from 'axios'
import { Images } from '../types'

class FileService {
  private fileReqConfig: AxiosRequestConfig = {
    baseURL: envConfig.FILE.baseURL,
    headers: {
      Authorization: envConfig.API_KEY,
      'Content-Type': 'multipart/form-data'
    }
  }

  // CRUD demo
  // -----------upload a image-----------
  uploadImg = async (file: any) => {
    try {
      const response = await httpRequest.postAPI(
        '/upload',
        {
          smfile: file,
          format: 'json'
        },
        this.fileReqConfig
      )
      return response
    } catch (error) {
      console.error(`错误请求${error}`)
      return null
    }
  }

  // -----------read-----------

  // get a image
  getImg = async (hash: string) => {
    const response = await httpRequest.getAPI<Images>(
      '/upload_history',
      { page: 1 },
      this.fileReqConfig
    )
    if (response?.success) {
      return response?.data?.find(_item => _item?.hash === hash) ?? null
    }
    return null
  }

  // -----------delete-----------

  // delete a image
  removeImgByID = async (hash: string) => {
    try {
      return await httpRequest.getAPI(
        `delete/${hash}`,
        {
          hash,
          format: 'json'
        },
        this.fileReqConfig
      )
    } catch (error) {
      throw Error('find error')
    }
  }
}
const fileService = new FileService()
export default fileService
