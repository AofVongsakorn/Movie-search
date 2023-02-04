import React, { useEffect, useState } from 'react'
import MovieApi from '../../API/MovieApi'
import { APIKey } from '../../API/MovieApikey'
import { useParams } from 'react-router-dom'



const MovieDetail = () => {

    const [movie, setMovie] = useState([])
    const [loading, SetLoading] = useState(false)
    const { id } = useParams()


    useEffect(() => {

        const fetchDetail = async () => {
            const res = await MovieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
                .catch((err) => { console.error("Error", err) })

            setMovie(res.data)
            SetLoading(true)
        }
        fetchDetail();

    }, [])



    return (
        <div>

        {loading? (
            <div className='flex justify-around items-center m-10 gap-5'>
                <div className="w-full h-full shadow-lg">
                    <img src={movie.Poster} />
                </div>

                <div className='border rounded-2xl bg-sky-100 p-4 shadow-lg'>
                    <h3 className='text-lg font-bold'>{movie.Title}</h3>
                    <p className='text-md opacity-80 mt-4 '>{movie.Plot}</p>
                    <div className='text-base font-normal mt-4'>
                        <strong>Release : {movie.Released}</strong>
                    </div>
                </div>

            </div>
        ) : (
            <h4>Loading..</h4>
        )}



        </div>
    )
}

export default MovieDetail