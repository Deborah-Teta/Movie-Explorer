import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard({movie, toggleFavorite, favorites}) {
    const isFav = favorites.find((m) => m.id === movie.id);
    return(
        <>
          <div className="border p-2 rounded shadow hover:shadow-lg transition">
            <Link to={`/movie/${movie.id}`}>
            <img
                src={movie.image?.medium}
                alt={movie.name}
                className="w-full h-48 object-cover"
            />
            </Link>
            <h2 className="font-bold mt-2">{movie.name}</h2>
            <button
                onClick={() => toggleFavorite(movie)}
                className={`mt-2 px-2 py-1 rounded ${isFav ? "bg-red-500 text-white" : "bg-gray-200"}`}
      >
                {isFav ? "Remove Favorite" : "Add to Favorites"}
            </button>
          </div>
        
        </>
    )
}
export default MovieCard