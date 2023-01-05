import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Poster from "./Poster";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";
import Trending from "./Trending";
export default function Home() {
  //ALL PIECES OF STATE FOR API DATA

  const { searchOptions, imagePath } = useContext(DataContext);

  const [trending, setTrending] = useState("");

  const [nowPlaying, setNowPlaying] = useState("");
  //ALl GET REQUESTS FOR API
  const getTrendingMovies = () => {
    axios
      .get(
        `${searchOptions.api}/trending/all/week?api_key=${searchOptions.movieKey}`
      )
      .then((res) => setTrending(res.data.results))
      .catch((err) => console.log(err));
  };
  const getNowPlaying = () => {
    axios
      .get(
        `${searchOptions.api}/movie/now_playing?api_key=${searchOptions.movieKey}`
      )
      .then((res) => setNowPlaying(res.data.results))
      .catch((err) => console.log(err));
  };

  //RENDERING DATA

  useEffect(() => {
    getTrendingMovies();
  }, []);

  console.log(nowPlaying);

  return (
    <div className="home-container">
      <NavBar />
      <Hero />
      <Trending trending={trending} nowPlaying={nowPlaying} />
    </div>
  );
}
