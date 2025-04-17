import User from '../models/User.js'
import Service from '../models/Service.js'
import jwt from "jsonwebtoken"


export const checkAdminOrOwner = async (req, res, next) => {
    const {id} = req.user
    const serviceID = req.params.id
    try {
        const service = await Service.findById(serviceID)
        const user = await User.findById(id)

        const isOwner = service.userID.toString() === id
        const isAdmin = user.role === 'admin'
        console.log(service)
        if(isOwner || isAdmin){
            next()
        }
        else{
            return res.status(403).json(`Access denied : you ar nor owner nor admin of the service`)
        }

    } 
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ error: "Invalid token : incorrect signature" })
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({ error: "Token expired, please login again" })
        }
        return res.status(500).json({ error: "Error while verifating the token" })
    }

}


