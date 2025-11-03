import { useState, useEffect } from "react";
import moviesData from "../data/movies";

function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useFetchMovies: Starting to fetch movies");
    setTimeout(() => {
      setMovies(moviesData);
      console.log("useFetchMovies: Movies data:", moviesData);
      setLoading(false);
    }, 500);
  }, []);

  return { movies, loading };
}

export default useFetchMovies;
