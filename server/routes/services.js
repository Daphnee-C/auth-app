import {Router} from 'express'
import {createService, getAllServices} from '../controller/servicesController.js'
import { verifyUser } from '../middleware/verifyUser.js'

const servicesRouter = Router()

servicesRouter.get('/services', getAllServices)
servicesRouter.post('/services', verifyUser, createService)

export default servicesRouter
