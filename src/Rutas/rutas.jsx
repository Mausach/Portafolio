import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Proyectos } from '../Proyectos'



export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
  
        <Route path="/*" element={<App/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        
    
        </Routes>
      </BrowserRouter>
    )
  }