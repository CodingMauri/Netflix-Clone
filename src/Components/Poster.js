import React from 'react'

export default function Poster({movie}) {


    const ImagePath = "https://image.tmdb.org/t/p/w500/" ;
  return (
    <div className = "poster-cntnr">
        <img className = "poster" src = {ImagePath + movie.poster_path} />
    </div>
  )
}
