import React from 'react';
import { useState, useEffect } from 'react';

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log('Loaded from localStorage:', saved); // ← ADD THIS
  setFavorites(saved);
}, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
  console.log('Saving to localStorage:', favorites); // ← ADD THIS
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((m) => m.id === movie.id);
      if (exists) {
        return prevFavorites.filter((m) => m.id !== movie.id); // ← Fixed
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;