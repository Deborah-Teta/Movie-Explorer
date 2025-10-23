// import React, { useState } from "react";
// import MovieCard from "../components/MovieCard";
// import SearchBar from "../components/SearchBar";
// import CategoryFilter from "../components/CategoryFilter";
// import useFetchMovies from "../hooks/useFetchMovies";


// function Home({ toggleFavorite, favorites }) {
//   const { movies, loading } = useFetchMovies();
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   if (loading) return <p className="text-center mt-10">Loading movies...</p>;

//   const filteredMovies = movies.filter((movie) => {
//     const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = category === "All" || movie.category === category;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="p-4">
//       <SearchBar search={search} setSearch={setSearch} />
//       <CategoryFilter category={category} setCategory={setCategory} />

//       {filteredMovies.length === 0 ? (
//         <p className="text-center text-gray-500 mt-10">No movies found.</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//           {filteredMovies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               movie={movie}
//               toggleFavorite={toggleFavorite}
//               favorites={favorites}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
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















