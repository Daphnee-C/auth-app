import { Link } from "react-router"
import { useContext } from "react"
import { ServicesContext } from "../context/servicesContext.jsx"
import { AuthContext } from "../context/authContext.jsx"

const NavBar = () => {
const [services] = useContext(ServicesContext)
const {isAuthenticated, handleLogout} = useContext(AuthContext)

    return (
    <nav className="bg-pink-200 shadow-md py-4 px-6 rounded-b-3xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-gray-800">EventApp </Link>

        <p className="text-gray-700 font-semibold">{services.length} events disponibles</p>

        <ul className="flex space-x-6">
            <li>
                <Link to="/" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Home</Link>
            </li>

        {!isAuthenticated ? (
            <>
                <li>
                    <Link to="/register" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Register</Link>
                </li>
                <li>
                    <Link to="/login" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Login</Link>
                </li>
            
            </>
            ) : (
            <>
                <li>
                    <Link to="/addservice" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Add Service</Link>
                </li>
                <li>
                    <Link to="/profile" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Profile</Link>
                </li>
                <li>
                    <Link to="/users" className="text-gray-800 font-semibold hover:text-white transition duration-300"> Users</Link>
                </li>
                <li onClick = {handleLogout} className="cursor-pointer text-gray-800 font-semibold hover:text-red-500 transition duration-300"> 
                    Logout
                </li>
            </>
        )}
            </ul>
        </div>
    </nav>
    )
}

export default NavBar
