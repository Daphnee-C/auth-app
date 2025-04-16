import {Router} from 'express'
import {createService, getAllServices, getServiceByID} from '../controller/servicesController.js'
import { verifyUser } from '../middleware/verifyUser.js'
import { upload } from '../middleware/uploadFile.js'

const servicesRouter = Router()

servicesRouter.get('/services', getAllServices)
servicesRouter.get('/service/:id', getServiceByID)
servicesRouter.post('/services', verifyUser, upload.single("image"), createService)

export default servicesRouter
