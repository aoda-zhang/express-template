import envConfig from '@config/env'
import httpRequest from '@core/http'
import { AxiosRequestConfig } from 'axios'

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
    try {
      const response = await httpRequest.getAPI(
        '/upload_history',
        { page: 1 },
        this.fileReqConfig
      )
      console.log('getUploadedFile---------------', response)
    } catch (error) {
      throw Error('find error')
    }
  }

  // -----------delete-----------

  // delete a image
  removeImgByID = async (hash: string) => {
    try {
      return await httpRequest.deleteAPI(
        `delete/${hash}`,
        {
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
