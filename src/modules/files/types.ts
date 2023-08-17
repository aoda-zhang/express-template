export interface ImagesItem {
  width: number
  height: number
  filename: string
  storename: string
  size: number
  path: string
  hash: string
  created_at: string
  url: string
  delete: string
  page: string
}
export interface FileCommonResType<T = any> {
  success: boolean
  code: string
  message: string
  data: T[]
  RequestId: string
}
export type Images = FileCommonResType<ImagesItem>
