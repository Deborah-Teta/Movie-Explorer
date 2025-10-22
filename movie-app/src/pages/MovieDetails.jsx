import { useParams } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";

export default function MovieDetails() {
  const { id } = useParams();
  const { movies, loading } = useFetchMovies();

  if (loading) return <p className="p-4">Loading...</p>;

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="p-4">Movie not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.name}</h1>
      <img src={movie.image?.medium} alt={movie.name} className="w-1/2 mt-4" />
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
      <p className="mt-2"><strong>Genres:</strong> {movie.genres.join(", ")}</p>
      <p><strong>Rating:</strong> {movie.rating.average || "N/A"}</p>
    </div>
  );
}
