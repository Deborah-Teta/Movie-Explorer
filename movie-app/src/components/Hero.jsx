import React from 'react';
import {Link} from 'react-router-dom';
import homeImg from '../assets/pics/homeImg.png';

function HeroSection (){
    return(
        <section id='home' className='hero relative h-screen  overflow-hidden md: flex items-center justify-center mb-5'>
            <div className='hero-background absolute inset-0 z-0'>
                <img 
                src={homeImg}
                alt='Home background'
                className='w-full h-full object-cover brightness-70 backdrop-saturate-120'
                />
            </div>
            <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg  bg-black bg-opacity-50 text-white p-5 text-center container py-2 rounded-b-full ">
                <h1 className="text-6xl font-bold mb-5">Watch </h1>
                <p className="text-2xl mb-5">Relax Every day with movie app.</p>
            <Link
                to="/Favorites"
                className="inline-block px-8 py-3 bg-amber-700 text-white font-semibold rounded-full no-underline hover:bg-amber-900 hover:text-white"
            >
                Discover Your Favs
            </Link>
      </div>
        </section>
    )
}
export default HeroSection