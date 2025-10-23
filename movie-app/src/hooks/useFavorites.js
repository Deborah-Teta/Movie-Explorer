

import React from 'react'
import {useState, useEffect} from 'react'

function useFavorites() {
  const [favorites, setFavorites] = useState([])
  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem('favorites')) || []; setFavorites(saved)
  }, []);
  
  useEffect(()=> {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
  const toggleFavorite = (movie) => {
    if (favorites.find((m)=>m.id === movie.id)){
      setFavorites(favorites.filter((m)=>m.id !==movie));
    }
    else{
      setFavorites([...favorites, movie]);
    };
    
}
return{favorites, toggleFavorite };
}

export default useFavorites