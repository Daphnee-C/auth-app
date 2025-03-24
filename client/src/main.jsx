import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyRouter from './MyRouter'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRouter/>
  </BrowserRouter>,
)
