import React from 'react'
import { useState, useEffect } from "react";
import moviesData from "../data/movies.js";

function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API fetch delay (just for effect)
    setTimeout(() => {
      setMovies(moviesData);
      setLoading(false);
    }, 500);
  }, []);

  return { movies, loading };
}
export default useFetchMovies