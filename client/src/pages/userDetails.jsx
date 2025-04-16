import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link} from "react-router"

const UserDetails = () => {
    const { id } = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(service)

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/user/${id}`)
            console.log(response)
            if (response.status === 200) {
                setUserDetails(response.data)
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
        fetchUserDetails()
    }, [])


    return (

        <>
        {!loading && userDetails && (
        <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-xl bg-gray-100 rounded-3xl shadow-lg border border-gray-200 p-6">

        <img className="w-full h-52 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center text-gray-500 text-sm"
            src={userDetails.image ? `http://localhost:8000${userDetails.image}` : `https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg` }
            alt="Profile image"  
        />  
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello I am {userDetails.first_name} {userDetails.last_name}</h2>
        <p className="text-xl text-gray-800  ">{userDetails.email}</p>
        <button className="flex w-full justify-center rounded-md bg-pink-300 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-indigo-600">
        Edit profile

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

export default UserDetails






