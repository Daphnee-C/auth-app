import {Router} from 'express'
import { createUser, loginUser } from '../controller/authController.js'

const authRouter = Router()

authRouter.post('/register', createUser)
authRouter.post('/login', loginUser)

export default authRouter
