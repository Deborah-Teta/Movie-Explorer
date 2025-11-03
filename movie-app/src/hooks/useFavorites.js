import React from 'react';
import { useState, useEffect } from 'react';

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log('Loaded from localStorage:', saved); 
  setFavorites(saved);
}, []);

  useEffect(() => {
  console.log('Saving to localStorage:', favorites); 
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((m) => m.id === movie.id);
      if (exists) {
        return prevFavorites.filter((m) => m.id !== movie.id); 
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;