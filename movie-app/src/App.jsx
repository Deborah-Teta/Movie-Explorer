import React from 'react'
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import './App.css'
import './index.css'

function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route paht='/MovieDetails' element={<MovieDetails />} />
            <Route path='/Favorites' element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
