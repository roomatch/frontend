import React from 'react'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Nav from './components/Nav'
function App() {
  return (
    <main className='h-screen'>
      <Routes>
        <Route path='/inicio' element={<Nav><Home/></Nav>} />
        <Route path='/' element={<SignUp/>} />
      </Routes>
    </main>
  )
}

export default App
