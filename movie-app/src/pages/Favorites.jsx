import { useFavoritesContext } from '../context/FavoritesContext'; 
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites, toggleFavorite } = useFavoritesContext(); 

  if (favorites.length === 0) {
    return <p className="p-4 text-black">You have 0 favorite movies</p>;
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