import React from 'react'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
{/*}
import Ingresar from './pages/Ingresar/Ingresar'
import Nav from './components/Nav/Nav'
import Buscar from './pages/Buscar/Buscar'
import Perfilamiento from './pages/Perfilamiento/Perfilamiento'
*/}
import Landing from './pages/Landing/Landing'
function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </main>
  )
}

export default App
