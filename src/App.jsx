import React from 'react'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import Ingresar from './pages/Ingresar/Ingresar'
import Nav from './components/Nav/Nav'
import Buscar from './pages/Buscar/Buscar'
import Landing from './pages/Landing/Landing'
function App() {
  return (
    <main className=''>
      <Routes>
        <Route path='/buscar' element={<Nav><Buscar/></Nav>} />
        <Route path='/ingresar' element={<Ingresar/>} />
        <Route path='/' element={<Landing/>} />
      </Routes>
    </main>
  )
}

export default App
