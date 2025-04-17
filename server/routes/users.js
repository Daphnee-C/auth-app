import {Router} from 'express'
import {verifyUser} from '../middleware/verifyUser.js'
import { getUserProfile, getAllUsers, getUserByID} from '../controller/usersController.js'
import {checkAdmin} from '../middleware/checkAdmin.js'

const userRouter = Router()


userRouter.get(`/profile`, verifyUser, getUserProfile)

userRouter.get('/users', verifyUser, checkAdmin,  getAllUsers)
userRouter.get('/user/:id', getUserByID)



export default userRouter 