import { createRoot } from 'react-dom/client'
import './index.css'
import MyRouter from './MyRouter'
import { BrowserRouter } from 'react-router'
import { ServicesController } from './context/servicesContext.jsx'
import { AuthController } from './context/authContext'

createRoot(document.getElementById('root')).render(
  <ServicesController>
    <AuthController>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>,
    </AuthController>
  </ServicesController>
)
