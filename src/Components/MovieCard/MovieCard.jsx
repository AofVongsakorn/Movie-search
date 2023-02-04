import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'



const MovieCard = ( {movie}) => {
  console.log(movie);
    
  return (

    <div className='card shadow-xl bg-sky-100'>
        <div className="card-image">
            <img src={movie.Poster} />
        </div>
        <div className="card-content">
            <span className='card-title'>{movie.Title}</span>
            <p>Year : {movie.Year}</p>
        </div>
        <div className='card-action'>
            <Link to={`movie/${movie.imdbID}`}>Read more</Link>

        </div>


    </div>
  )
}

export default MovieCard