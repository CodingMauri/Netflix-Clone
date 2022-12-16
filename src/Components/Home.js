import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import MovieCarousel from './MovieCarousel'
import {getTrendingMovies} from "../GetData"
import { useEffect, useContext} from 'react'
import { DataContext } from '../DataContext'
export default function Home({setTrendingMovies,trendingMovies}) {
  const {searchOptions} = useContext(DataContext)


  console.log(trendingMovies)

  

  



  useEffect(() => {
    getTrendingMovies(searchOptions.api, searchOptions.movieKey, setTrendingMovies)
  },[])
  return (
    <div className = "home-container">   
      
      <NavBar />
      <Hero /> 
      <MovieCarousel />
      
    </div>
  )
}
