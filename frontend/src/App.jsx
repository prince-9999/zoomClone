import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing.jsx';
import Authentication from './pages/authentication.jsx';
import { AuthProvider } from './contexts/authContext.jsx';
import VideoMeet from './pages/videoMeet.jsx';
import HomeComponent from './pages/Home.jsx'
import History from './pages/history.jsx';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/:url' element={<VideoMeet />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/history' element={<History />} />
        </Routes>
        </AuthProvider>
      </Router>

      </div>
  )
}
