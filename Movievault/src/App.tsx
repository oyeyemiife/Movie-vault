import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landingpage } from './pages/LandingPage/Landingpage'
import { Profile} from './pages/Profile/Profile'
import { Signup } from './pages/Signup/signup'
import { Signin } from './pages/Signin/Signin'
import { Madeforyou } from './pages/Profile/madeforyou'
import { WatchlistProvider } from './components/watchlistContext'
import './App.css'
import React from 'react'

function App() {

  return (
    <WatchlistProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/landingpage" element={<Landingpage /> } />
      <Route path="/profile" element ={<Profile/>} />
      <Route path="/madeforyou" element = {<Madeforyou/>} />
    </Routes>
    </BrowserRouter>
    </WatchlistProvider>
  )
}

export default App
