import { useContext, useEffect, useState } from "react"
import {AuthContext} from "../context/authContext"
import axios from 'axios'
import { useNavigate } from "react-router"

const Profile = () => {
    let navigate = useNavigate()
    const {tokenStorage, isAuthenticated} = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/profile`, {
                headers : {
                    'Authorization' : `Bearer ${tokenStorage}`
                }
            })
            if(response.status === 200){
                setUserProfile(response.data)
            }
            
        } 
        catch (err) {
            console.log(err)    
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(tokenStorage){
            fetchUserProfile()
        }
        
    }, [isAuthenticated, tokenStorage])

    return(
        <>
        {!loading && userProfile && (
            <>
            <h1>Hello My name is {userProfile.first_name}</h1>
            <img src={`http://localhost:8000${userProfile.image}`} />
            </>
        
        )}
        </>
    )
}

export default Profile