import {Link} from 'react-router'


const NavBar = () => {
    return(
    
            <ul class="bg-sky-800 flex justify-center space-x-4">
           <Link to='/'> <li>Home</li> </Link>
           <Link to='/profile'>  <li>Profile</li>  </Link>
           <Link to='/contact'> <li>Contact</li></Link>
           <Link to='/register'> <li>Register</li></Link>

            </ul>    
    )
}


export default NavBar