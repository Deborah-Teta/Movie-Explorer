
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import HeroSection from '../components/Hero'
import SearchBar from '../components/SearchBar'
import useFavorites from '../hooks/useFavorites'
import useFetchMovies from '../hooks/useFetchMovies'
import MovieCard from '../components/MovieCard'



function Home () {
  const [search] = useState('');
  const { movies, loading } = useFetchMovies();
  const { favorites, toggleFavorite } = useFavorites();

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(search.toLowerCase()) ||
    movie.category.toLowerCase().includes(search.toLowerCase())
  );
  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-white text-xl">Loading movies...</div>
      </div>
    );
  }
    return(
       <>
         <HeroSection />
         <section className='py-20 bg-black'>
            <div className='container mx-auto px-4 '>
               <SearchBar />
      
            <div className="flex flex-col  gap-8">
               {filteredMovies.map(movie => (
          
                <MovieCard 
              movie={movie}
              toggleFavorite={() => toggleFavorite(movie)}
              isFavorite={isFavorite(movie.id)}
               />
          
               ))}
            </div>

            </div>
         </section>
       </>
    )
}
export default Home















