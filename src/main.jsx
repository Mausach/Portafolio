import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los estilos CSS de Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { AppRouter } from './Rutas/rutas.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
