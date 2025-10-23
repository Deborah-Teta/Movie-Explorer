import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App () {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/MovieDetails' element={<MovieDetails />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </div>

    </Router>
  )

}
export default App