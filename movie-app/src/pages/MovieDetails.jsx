import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import useFetchMovies  from "../hooks/useFetchMovies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loading } = useFetchMovies();
  
  console.log("MovieDetails - movies:", movies);
  console.log("MovieDetails - id:", id);
  console.log("MovieDetails - id type:", typeof id);
  console.log("MovieDetails - first movie id:", movies[0]?.id, "type:", typeof movies[0]?.id);

 if (loading) return <p className="p-4">Loading...</p>;

const movie = movies.find((m) => m.id.toString() === id);

if (!movie) return <p className="p-4">Movie not found</p>;

  return (
    <div  className="movie-details p-6 max-w-6xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="back-btn bg-gray-200 text-black px-4 py-2 rounded mb-6 hover:bg-gray-500 transition"
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
          <div className="space-y-3 text-black">
            <p><strong className="text-amber-800">Category:</strong> {movie.category}</p>
            <p><strong className="text-amber-800">Year:</strong> {movie.year}</p>
            <p><strong className="text-amber-800">Rating:</strong> ⭐ {movie.rating}/10</p>
            <p><strong className="text-amber-800">Director:</strong> {movie.director}</p>
            <p><strong className="text-amber-800">Summary:</strong> {movie.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;