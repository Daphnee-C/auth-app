import { useState, useContext } from "react"
import {AuthContext} from '../context/authContext'

const Login  = () => {

    const {handleLogin} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


        return (
        <>
            {

            }
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
                </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form  method="POST" onSubmit={e => handleLogin(e, email,password)} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>
                </div>
    
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-pink-600 hover:text-pink-500">
                        Forgot password?
                        </a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>
                </div>
    
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-pink-200 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>
            </div>
            </div>
        </>
        )
  }

  export default Login
