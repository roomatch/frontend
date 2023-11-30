import React from 'react'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Nav from './components/Nav'
import Search from './pages/Search'
import Resultados from './pages/Resultados'
function App() {
  return (
    <main className='h-screen'>
      <Routes>
      <Route path='/buscar' element={<Nav><Search/></Nav>} />
        <Route path='/inicio' element={<Nav><SignUp/></Nav>} />
        <Route path='/resultados' element={<Nav><Resultados/></Nav>} />
        <Route path='/' element={<SignUp/>} />
      </Routes>
    </main>
  )
}

export default App
