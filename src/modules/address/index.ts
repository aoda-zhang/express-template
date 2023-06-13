import { Router } from 'express'
import addressController from './controller'
const addressRouters = Router()
// add a new address
addressRouters.post('/address/add', addressController.addAddress)
// read a address by ID
addressRouters.get('/address/read/:id', addressController.getAddressByID)
// update a address by address name
addressRouters.put('/address/:name/:newName', addressController.updateAddress)
// remove a address
addressRouters.delete('/address/remove/:id', addressController.removeAddress)
export default addressRouters
