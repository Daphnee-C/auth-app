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
    const {title, description, price, category, address, availability} = req.body
    try {
        const newService = await Service.create({
            title, 
            description,
            price,
            category,
            address,
            availability,
            image : req.file ? '/public/images/' + req.file.filename : '/public/images/suunset.jpg',
            userID : req.user.id
        })
        if(newService){
            return res.status(201).json({message : `Your event has been created`, newService})
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Internal server error`, err)
    }
}


export const deleteServiceByID = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedService = await Service.findByIdAndDelete(id)
        if (!deletedService) {
            return res.status(404).json(`Service not found`)
        }
        return res.status(203).json({ message: "Service successfully deleted" })
    } 
    
    catch (err) {
        console.log(err);
        return res.status(500).json(`Internal server error`)
    }
}
