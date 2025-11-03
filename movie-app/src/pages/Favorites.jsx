// src/pages/Favorites.jsx
import { useFavoritesContext } from '../context/FavoritesContext'; // ← NEW
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites, toggleFavorite } = useFavoritesContext(); // ← SAME instance

  if (favorites.length === 0) {
    return <p className="p-4 text-white">You have 0 favorite movies</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={() => toggleFavorite(movie)}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default Favorites;