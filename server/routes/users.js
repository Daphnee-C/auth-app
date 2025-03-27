import {Router} from 'express'
import {verifyUser} from '../middleware/verifyUser.js'
import { getUserProfile } from '../controller/usersController.js'

const userRouter = Router()


userRouter.get(`/profile`, verifyUser, getUserProfile)


export default userRouter 