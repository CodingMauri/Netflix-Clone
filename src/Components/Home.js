import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import MovieCarousel from './MovieCarousel'
import GetMovies from './GetMovies'
export default function Home() {
  return (
    <div className = "home-container">   
      <NavBar />
      <Hero /> 
      <MovieCarousel />
      
    </div>
  )
}
