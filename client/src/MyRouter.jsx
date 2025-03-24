import {Routes, Route} from 'react-router'
import App from './App'
import Profile from './pages/profile'
import Register from './pages/register'
import NavBar from './components/NavBar'


const MyRouter = () => {
    return(
        <> 

        <NavBar />
        
        <Routes>
            <Route path='/' element= {<App/>} /> 
            <Route path='/profile' element= {<Profile/>} /> 
            <Route path='/register' element= {<Register/>} /> 

        </Routes>
        </>
    )
}


export default MyRouter