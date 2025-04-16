import {Routes, Route} from 'react-router'
import App from './App'
import Profile from './pages/profile'
import NavBar from './components/NavBar'
import Register from './pages/register'
import Login from './pages/login'
import Error from './pages/error'
import Users from './pages/users'
import UserDetails from './pages/userDetails'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { useNavigate } from 'react-router'
import AddService from './pages/addService'
import ServiceDetails from './pages/serviceDetails'
import ProtectedRoute from './utils/ProtectedRoute'


const MyRouter = () => {
    return(
        <> 

        <NavBar />
        <Routes>
            <Route path='/' element= {<App/>} /> 
            <Route path='/profile' element={ 
                <ProtectedRoute>
                    <Profile/>
                </ProtectedRoute>
            }/> 
            <Route path='/register' element= {<Register/>} /> 
            <Route path='/login' element= {<Login/>} />
            <Route path ='/addservice' element= { 
                <ProtectedRoute>
                    <AddService/>
                </ProtectedRoute>
            } />
            <Route path ='/users' element = {<Users/>} />
            <Route path ='/user/:id' element = {<UserDetails/>} />
            <Route path ='/service/:id' element = {<ServiceDetails/>} />
            <Route path='*' element= {<Error/>} /> 
        </Routes>
        </>
    )
}


export default MyRouter