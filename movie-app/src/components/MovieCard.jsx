import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({movie, toggleFavorite, isFavorite}) {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return(  
    <div className="mx-auto bg-black rounded-lg shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition">
      <Link to={`/moviedetails/${movie.id}`} className="block">
        <img 
          src={movie.image} 
          alt={movie.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-white">{movie.name}</h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{movie.summary}</p>
          <span className="inline-block bg-amber-800 text-white px-2 py-1 rounded text-xs">
            {movie.category}
          </span>
        </div>
      </Link>
      <div className="p-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleFavoriteClick}
            className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-900 transition"
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;