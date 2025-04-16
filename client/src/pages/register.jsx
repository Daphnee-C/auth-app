import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'



const Register = () => {
    let navigate = useNavigate()
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)


    const handleRegistration = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('password', password)
        if(image){
            formData.append('image', image)
        }


        try {
            const newUser = await axios.post(`http://localhost:8000/api/register`, formData, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            if(newUser.status === 201){
                alert(newUser.data)
                navigate('/')
            }
        }

        catch (err) {
            console.log(err)
            if (err) {
                alert(err.response.data)
            }
        }
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-gray-100 p-8 rounded-3xl shadow-lg border border-gray-200">
                <div>
                    <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Register a new account
                    </h2>
                </div>
        
                <form onSubmit={handleRegistration} method="POST" className="space-y-6">
                    <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
                        First name
                    </label>
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        required
                        autoComplete="first_name"
                        onChange={e => setFirst_name(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    </div>
        
                    <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
                        Last name
                    </label>
                    <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        autoComplete="last_name"
                        onChange={e => setLast_name(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    </div>
        
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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                        Password
                    </label>
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
                    <label htmlFor="image" className="block text-sm font-medium text-gray-900">
                        Profile picture
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    </div>
        
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-pink-300 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Register
                    </button>
                    </div>
                </form>
        
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <a href="/login" className="font-semibold text-pink-600 hover:text-red-300">
                    Please sign in
                    </a>
                </p>
                </div>
            </div>
        </>
        )
}


export default Register