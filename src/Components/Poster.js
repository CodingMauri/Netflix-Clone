import React from 'react'
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import {motion} from "framer-motion"
export default function Poster({movies}) {
    const {imagePath} = useContext(DataContext)
  return (
    <motion.div className="poster-cntnr" >
      <img className = "poster" src = {imagePath + movies.poster_path} alt = "loading"/>
    </motion.div>
  )
}
