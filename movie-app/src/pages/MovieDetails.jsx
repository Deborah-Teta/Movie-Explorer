import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import useFetchMovies  from "../hooks/useFetchMovies";
import useFavorites from '../hooks/useFavorites';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loading } = useFetchMovies();
  const {favorites, toggleFavorite} = useFavorites()

  console.log("MovieDetails - movies:", movies);
  console.log("MovieDetails - id:", id);

  if (loading) return <p className="p-4">Loading...</p>;
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) return <p className="p-4">Movie not found</p>;
  const isFavorite = favorites.some(fav => fav.id === movie?.id);

  return (
    <div  className="movie-details p-6 max-w-6xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="back-btn bg-gray-600 text-white px-4 py-2 rounded mb-6 hover:bg-gray-700 transition"
      >
        ← Back
      </button>
      
      <div className=" flex flex-col md:flex-row gap-8">
        <img 
          src={movie.image} 
          alt={movie.name} 
          className="details-image w-full md:w-1/3 rounded-lg shadow-lg" 
        />
        
        <div className=" flex-1 text-white">
          <h1 className="text-3xl font-bold mb-4">{movie.name}</h1>
          <div className="space-y-3">
            <p><strong className="text-amber-800">Category:</strong> {movie.category}</p>
            <p><strong className="text-amber-800">Year:</strong> {movie.year}</p>
            <p><strong className="text-amber-800">Rating:</strong> ⭐ {movie.rating}/10</p>
            <p><strong className="text-amber-800">Director:</strong> {movie.director}</p>
            <p><strong className="text-amber-800">Summary:</strong> {movie.summary}</p>
          </div>
          
          <button 
            onClick={() => toggleFavorite(movie)}
            className={`mt-6 px-6 py-3 rounded-lg transition ${
              isFavorite 
                ? 'bg-amber-700 hover:bg-amber-900'
                : 'bg-red-600 hover:bg-red-700' 
            } text-white font-semibold`}
          >
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails