import { useState, useContext } from "react"
import {AuthContext} from '../context/authContext'

const Login  = () => {

    const {handleLogin} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-gray-100 p-8 rounded-3xl shadow-lg border border-gray-200">
                <div>
                <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                </div>

                <form method="POST" onSubmit={e => handleLogin(e, email, password)} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={e => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-pink-600 hover:text-pink-400">
                        Forgot password?
                        </a>
                    </div>
                    </div>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                </div>
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-pink-300 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                Not registered?{' '}
                <a href="/register" className="font-semibold text-pink-600 hover:text-pink-400">
                    Create an account
                </a>
                </p>
            </div>
            </div>
        </>
        )   

    }

export default Login
