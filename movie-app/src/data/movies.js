import React from "react"
import Avatar from '../assets/pics/Avatar.png'
import DarkKnight from '../assets/pics/Dark-Knight.png';
import Inception from '../assets/pics/Inception.png'
import Interstaller from '../assets/pics/Interstaller.png'

function movies (){
   const moviesData= [
  {
    "id": 1,
    "name": "Inception",
    "category": "Sci-Fi",
    "image": Inception,
    "summary": "A thief who steals corporate secrets through dream-sharing technology.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
  {
    "id": 2,
    "name": "The Dark Knight",
    "category": "Action",
    "image": DarkKnight,
    "summary": "Batman battles the Joker in Gotham City.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
  {
    "id": 3,
    "name": "Interstellar",
    "category": "Adventure",
    "image": Interstaller,
    "summary": "A team travels through a wormhole in search of a new home for humanity.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
  {
    "id": 4,
    "name": "Avatar",
    "category": "Sci-Fi",
    "image": Avatar,
    "summary": "A paraplegic Marine on an alien planet becomes part of the Na'vi culture.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
   {
    "id": 5,
    "name": "The Dark Knight",
    "category": "Action",
    "image": DarkKnight,
    "summary": "Batman battles the Joker in Gotham City.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
   {
    "id": 6,
    "name": "The Dark Knight",
    "category": "Action",
    "image": DarkKnight,
    "summary": "Batman battles the Joker in Gotham City.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
  {
    "id": 7,
    "name": "The Dark Knight",
    "category": "Action",
    "image": DarkKnight,
    "summary": "Batman battles the Joker in Gotham City.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
  {
    "id": 8,
    "name": "The Dark Knight",
    "category": "Action",
    "image": DarkKnight,
    "summary": "Batman battles the Joker in Gotham City.",
    "year": 2010,
    "rating": 8.8,
    "director": "Christopher Nolan"
  },
]

    return(
    moviesData
    )
}

export default movies;
