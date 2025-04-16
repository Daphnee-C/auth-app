import {Router} from 'express'
import {verifyUser} from '../middleware/verifyUser.js'
import { getUserProfile, getAllUsers, getUserByID} from '../controller/usersController.js'

const userRouter = Router()


userRouter.get(`/profile`, verifyUser, getUserProfile)

userRouter.get('/users', getAllUsers)
userRouter.get('/user/:id', getUserByID)

export default userRouter 