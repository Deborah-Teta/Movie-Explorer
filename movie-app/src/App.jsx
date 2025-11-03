import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/moviedetails/:id' element={<MovieDetails />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}
export default App