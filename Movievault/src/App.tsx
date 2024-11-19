import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landingpage } from './pages/LandingPage/Landingpage'
import { Profile} from './pages/Profile/Profile'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage /> } />
      <Route path="/profile" element ={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
