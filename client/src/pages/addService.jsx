import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router"


const AddService = () => {
    let navigate = useNavigate()
    const {tokenStorage} = useContext(AuthContext)

    const [serviceInfo, setServicesInfo] = useState({
        title: '',
        description: '',
        price: null,
        category: '', 
        address: '', 
        availability: null,
    })
    const [image, setImage] = useState(null);

    const handleServiceSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", serviceInfo.title);
        formData.append("description", serviceInfo.description);
        formData.append("price", serviceInfo.price);
        formData.append("category", serviceInfo.category);
        formData.append("address", serviceInfo.address);
        formData.append("availability", serviceInfo.availability);
        if(image){
            formData.append("image", image)
        }

            try {
                const response = await axios.post(`http://localhost:8000/api/services`, formData, {
                    headers: {
                        'Authorization' : `Bearer ${tokenStorage}`,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if(response.status === 201){
                    alert(response.data.message)
                    navigate(`/service/${response.data.newService._id}`)
                }
            } 
            catch (err) {
                console.log(err)
            }
        
    }

    return (
            <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-xl bg-gray-100 rounded-3xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                    Add a new service
                </h2>
        
                <form onSubmit={handleServiceSubmit} className="mt-10 space-y-6">
                    <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-900">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, title: e.target.value })
                        }
                    />
                    </div>

                    <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, description: e.target.value })
                        }
                    />
                    </div>
        
                    <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-900">
                        Price (€)
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, price: e.target.value })
                        }
                    />
                    </div>
        
                    <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                        Category
                    </label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, category: e.target.value })
                        }
                    />
                    </div>
                        
                    <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-900">
                        Image
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    </div>


                    <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                        Address
                    </label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, address: e.target.value })
                        }
                    />
                    </div>
        
                    <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-900">
                        Availability
                    </label>
                    <input
                        id="availability"
                        name="availability"
                        type="text"
                        required
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        onChange={(e) =>
                        setServicesInfo({ ...serviceInfo, availability: e.target.value })
                        }
                    />
                    </div>
        
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-pink-300 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Add service
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </>
        )
        
        


}










export default AddService