import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'



const MovieListing = () => { 

    const { movies } = useSelector((state) => state.movies)
    
    

  return (
    <div className='movie-container'>
        {movies && movies.map((m) => (
          
        
           <MovieCard  key={m.imdbID} movie={m}/>
          
        ))}
    </div>

  )
}

export default MovieListing