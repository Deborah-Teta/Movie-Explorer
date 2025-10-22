import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
        
          <header class="fixed w-full bg-gray-800 shadow-md z-10">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="font-bold text-2xl shadow-md text-amber-800">Movies</h1>
            <nav className='flex space-x-6'>

                <Link to="/" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>Home</Link>
                <Link to="/MovieDetails" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>MoviesDetails</Link>
                <Link to="/Favorites" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>Favorites</Link>
                <Link to="/Contact" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>Contact</Link>
            </nav>
            </div>
         </header>    
        
        </>
    )
}
export default Navbar;