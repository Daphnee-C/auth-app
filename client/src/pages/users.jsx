import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router"

const Users = () => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users`)
            setUsers(response.data)
        } 
        catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    console.log(users)

    useEffect(() => {
        fetchUsers()
    }, [])

    return(
        <>
        <h1>Users page </h1>

        {!loading && users && users.map(user => {
            return (
                <>
                <Link to={`/user/${user._id}`} >
                    <h1>{user.first_name}</h1>
                </Link>
                
                </>
            )
        })
        
        }
        
        </>
    )
}


export default Users