import './App.css'
import {useContext } from 'react'
import { ServicesContext } from './context/servicesContext.jsx'
import axios from 'axios'

function App() {

  const [services, setServices] = useContext(ServicesContext)

  const fetchAPI = async () => {
    const token = localStorage.getItem(`token`)
    try {
      const response = await axios.get(`http://localhost:8000`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      }) 
      console.log(response)
    } 
    catch (err) {
      console.log(err)
    }
  }

  fetchAPI()

  return (
    <>


      <h1 className="text-4xl font-extrabold text-gray-800 text-center py-6 bg-pink-100 shadow-md rounded-lg">Hello welcome to my event APP</h1>
      <div className='flex flex-wrap justify-center gap-6 p-6'>
      {services && services.map(service => {
        return ( 
            <div key={service._id} className="max-w-xs bg-gray-100 rounded-3xl shadow-lg border border-gray-200 p-5 transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🎉 {service.title}</h3>
              <p className="text-gray-600 mb-2">📌 <span className="font-semibold">Category:</span>{service.category}</p>
              <p className="text-gray-700 mb-3">📖 <span className="font-semibold">Description:</span>{service.description}</p>
              <p className="text-green-600 font-bold mb-2">💰 Price: {service.price}</p>
              <p className="text-gray-500">📍 Address: {service.adress}</p>

              <button className="w-full bg-pink-100 text-gray-800 font-bold py-2 rounded-xl shadow-md hover:bg-pink-300 hover:text-white transition duration-300">
                Book Now
              </button>
            </div>
          
        )
      })}
      </div>
    </>
  )
}

export default App
