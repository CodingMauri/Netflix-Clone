import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieData from '../assets/MovieData';
import { useState } from 'react';
import GetMovies from './GetMovies';
export default function MovieCarousel() {
  const [movies,setMovies] = useState([])

  
  
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll:1,
    
  }

  console.log(movies)
  return (
    <div className = "movies">
      <Slider className = "movie-carousel" {...settings} >
          <GetMovies setMovies = {setMovies} />
            {movies.map((value ) => {
              return (
                <div key ={value.id}>
                  <img className = "movie-poster" src = {value.backdrop_path} />
                </div>
              )
            })}
          

      </Slider>
      
    </div>
  )
}
