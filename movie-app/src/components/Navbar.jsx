import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        
          <header className="fixed w-full bg-gray-800 shadow-md z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className ="font-bold text-2xl shadow-md text-amber-800">MovieApp</h1>
            <nav className='flex space-x-6'>

                <Link to="/" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>Home</Link>
                <Link to="/MovieDetails" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>MovieDetails</Link>
                <Link to="/favorites" className='text-amber-700 hover:text-amber-900 transition-colors font-bold'>Favorites</Link>
                
            </nav>
            </div>
         </header>    
        
        </>
    )
}
export default Navbar;