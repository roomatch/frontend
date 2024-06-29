import './globals.css'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import NavBar from './layout/nav-bar/NavBar'

import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/600.css'; // Semibold
import '@fontsource/poppins/700.css'; // Bold

import '@fontsource/comfortaa/400.css'; // Regular
import '@fontsource/comfortaa/600.css'; // Semibold
import '@fontsource/comfortaa/700.css'; // Bold
import Waitlist from './pages/waitlist/Waitlist';

function App() {

  return (
    <main className='app-container'>
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/waitlist' element={<Waitlist/>} />
      </Routes>
    </main>
  )
}

export default App
