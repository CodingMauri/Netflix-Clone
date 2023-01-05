import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import Poster from "./Poster";
import { DataContext } from "../DataContext";
export default function Trending({ trending, nowPlaying}) {
  const { imagePath } = useContext(DataContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className = "trending">
      <header className = "trending-header">Trending</header>
      <Slider className="movies" {...settings}>
        {trending  ? (
          trending.map((movies) => (
            <Poster key={movies.id} movies={movies}></Poster>
          ))
        ) : (
          <div>Loading...</div>
        )}

      </Slider>
     
      
    </div>
  );
}
