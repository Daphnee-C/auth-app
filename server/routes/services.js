import {Router} from 'express'
import {createService, deleteServiceByID, getAllServices, getServiceByID} from '../controller/servicesController.js'
import { verifyUser } from '../middleware/verifyUser.js'
import { upload } from '../middleware/uploadFile.js'
import {checkAdminOrOwner} from '../middleware/checkAdminOrOwner.js'

const servicesRouter = Router()

servicesRouter.get('/services', getAllServices)
servicesRouter.get('/service/:id', getServiceByID)
servicesRouter.post('/services', verifyUser, upload.single("image"), createService)
servicesRouter.delete('/service/:id', verifyUser, checkAdminOrOwner, deleteServiceByID)

export default servicesRouter
