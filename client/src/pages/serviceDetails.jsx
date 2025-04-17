import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link} from "react-router"

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(service)

    const fetchServiceByID = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/service/${id}`)
            console.log(response)
            if (response.status === 200) {
                setService(response.data)
            }
        } 
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect (() => {
        fetchServiceByID()
    }, [])





    return (

        <>
        {!loading && service && (
        <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-xl bg-gray-100 rounded-3xl shadow-lg border border-gray-200 p-6">

        <div className="w-full h-52 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center text-gray-500 text-sm">
        <img className="w-full h-52 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center text-gray-500 text-sm"
            src={service.image ? `http://localhost:8000/${service.image}` : `http://localhost:8000/public/images/suunset.jpg` }
            alt="Service image"  
        />  
        </div>  
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
        <p className="text-gray-600 mb-2">Category: {service.category}</p>
        <p className="text-gray-700 mb-3">Description: {service.description}</p>

        {service.userID && (
           <Link to={`/user/${service.userID._id}`}> <p className="text-gray-600 font-bold mb-2">Organiser: {service.userID.first_name}</p> </Link> 
        )}
        
        <p className="text-green-600 font-bold mb-2">Price: {service.price}</p>
        <p className="text-gray-500 mb-4">Address: {service.address}</p>

        <button className="w-full bg-pink-100 text-gray-800 font-bold py-2 rounded-xl shadow-md hover:bg-pink-300 hover:text-white transition duration-300">
            Book Now
        </button>

        <Link to="/">
            <button className="w-full mt-2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-xl shadow-sm hover:bg-gray-300 transition duration-300">
            Retour à l’accueil
            </button>
        </Link>
        </div>
        </div>
        )}
            
            </>
        )
    }

export default ServiceDetails
