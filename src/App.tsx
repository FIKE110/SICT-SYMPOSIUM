import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SpeakersPage from './pages/SpeakersPage'
import LandingPage from './pages/LandingPage'
import SchedulePage from './pages/SchedulePage'
import ContactPage from './pages/ContactPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='speakers' element={<SpeakersPage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='schedule' element={<SchedulePage />} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
