import {useState, createContext, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
export const AuthContext = createContext(null)

export const AuthController = ({children}) => {

    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        
        try {
            const response = await axios.post(`http://localhost:8000/api/login`, {email, password})
            if(response.status === 200){
                localStorage.setItem('token', response.data.token)
                alert(response.data.message)
                navigate('/')
                setIsAuthenticated (true)
            }
            
        } 
        catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}