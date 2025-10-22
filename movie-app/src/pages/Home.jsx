import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import useFetchMovies from "../hooks/useFetchMovies";

function Home({ toggleFavorite, favorites }) {
  const { movies, loading } = useFetchMovies();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  if (loading) return <p className="text-center mt-10">Loading movies...</p>;

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || movie.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />

      {filteredMovies.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
