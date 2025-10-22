import React from 'react'
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../hooks/useFavorites";

 function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) return <p className="p-4">You have 0 favorite movies</p>;

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      ))}
    </div>
  );
}
export default Favorites