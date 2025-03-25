import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () => {
    try{
        const response = await axios.get(`http://localhost:8000/api/services`)
        if(response.status === 200 ){
          setServices(response.data)
        }
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

console.log(services)

return (
  <div className="min-h-screen bg-gray-100 py-10">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🔥 Welcome to My Event App 🔥</h1>
    
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services && !loading ? (
        services.map(service => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="mt-4 text-lg font-bold text-red-300">{service.price}€</p>
              <p className="text-sm text-gray-500 mt-1">{service.adress}</p>
            </div>
            <div className="bg-red-300 text-white text-center py-2 font-semibold">
              {service.availability ? "Disponible" : "Indisponible"}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">Chargement des services...</p>
      )}
    </div>
  </div>
);

}

export default App
