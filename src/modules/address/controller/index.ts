import { Request, Response } from 'express'
import { AddressType } from '../models/address'
import addressService from '../services'
class AddressController {
  // CRUD control

  // --------------create a new address--------------
  addAddress = async (req: Request, res: Response) => {
    const param = req.body as AddressType
    try {
      await addressService.addAddress(param)
      res.status(200).json('保存成功')
    } catch (error) {
      res.status(400).json('保存失败')
    }
  }

  // --------------read a address by ID--------------
  getAddressByID = async (req: Request, res: Response) => {
    const id = req?.params?.id
    try {
      const data = await addressService.getAddressByID(id)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).send('错误请求')
    }
  }

  // --------------read all the address--------------
  getAddressList = async (req: Request, res: Response) => {
    try {
      const data = await addressService.getAddressList()
      res.status(200).json(data)
    } catch (error) {
      res.status(400).send('错误请求')
    }
  }

  // --------------update a address by ID--------------
  updateAddress = async (req: Request, res: Response) => {
    const name = req?.params?.name
    const newName = req?.params?.newName
    try {
      const data = await addressService.updateAddressName(name, newName)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).send('错误请求')
    }
  }

  // --------------remove a address by ID--------------
  removeAddress = async (req: Request, res: Response) => {
    const id = req?.params?.id
    try {
      const data = await addressService.removeAddressByID(id)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).send('错误请求')
    }
  }
}
const addressController = new AddressController()
export default addressController
