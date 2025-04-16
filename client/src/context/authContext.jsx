import { createContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

export const AuthContext = createContext(null)


export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [tokenStorage, setTokenStorage] = useState('')
    
    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        try {
            if (token) {
                setIsAuthenticated(true);
                setTokenStorage(token);
            }
        } catch (err) {
            console.log('Error accessing localStorage', err)
        } finally {
            setLoading(false)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        
        try {
            const response = await axios.post(`http://localhost:8000/api/login`, {email, password})
            if(response.status === 200){
                localStorage.setItem('token', response.data.token)
                setTokenStorage(response.data.token)
                setIsAuthenticated (true)
                alert(response.data.message)
                navigate('/')
            }
            
        } 
        catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
            navigate('/login', {replace: true})
        } catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated,tokenStorage, handleLogin, handleLogout}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}