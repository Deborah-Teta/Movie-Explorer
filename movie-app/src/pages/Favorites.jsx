import React from 'react'
import MovieCard from "../components/MovieCard";
import useFavorites  from "../hooks/useFavorites";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  console.log("Favorites - favorites:", favorites);

  if (favorites.length === 0) return <p className="p-4 text-white">You have 0 favorite movies</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={() => toggleFavorite(movie)}
          isFavorite={true} // Always true in favorites page
        />
      ))}
    </div>
  );
}
export default Favorites;