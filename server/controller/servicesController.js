import Service from "../models/Service.js";

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find()
        if(services.length < 1){
            return res.status(404).json(`Services not found`)
        }
        return res.status(200).json(services)
    } catch (err) {
    console.log(err);
    return res.status(500).json(`Internal server error`, err)
    }
}

export const getServiceByID = async (req, res) => {
    const {id} = req.params 
    try{
        const serviceByID = await Service.findById(id).populate('userID', '-password')
        if(!serviceByID){
            return res.status(404).json({message : `Service not found`})
        }
        return res.status(200).json(serviceByID)
    }

    catch(err){
        console.log(err)
        return res.status(500).json(`Internal server error`, err)
    }
}

export const createService = async (req, res) => {
    console.log(req)
    try {
        const newService = await Service.create(req.body)
        if(newService){
            return res.status(201).json(`Your event has been created`)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Internal server error`, err)
    }
}