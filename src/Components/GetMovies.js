import axios from "axios";
import { useEffect, useState } from "react";
const GetMovies = ({setMovies}) => {
  const movieKey = process.env.REACT_APP_MOVIE_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}`;

  const fetchMovies = () => {
    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  },[])
};

export default GetMovies;
