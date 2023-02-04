import React from 'react'
import { useState, useEffect } from 'react'
import movieApi from '../../API/MovieApi'
import { APIKey } from '../../API/MovieApikey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../Store/Reducer'

import MovieListing from '../MovieListing/MovieListing'





const Home = () => {


    const dispatch = useDispatch();
    const [search, setSearch] = useState('')


    useEffect(()=> {
        

        const fetchmovie  = async () => {
            const searchKey = search? search : 'Ant'
            const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)

            setTimeout(() => {

                dispatch(addMovie(res.data.Search))


            }, 500)

        }

        fetchmovie()

    }, [search]);

  return (


    <div className='flex justify-center items-center flex-col'>
        <h3 className='mt-4 text-2xl font-bold opacity-80 underline'>Movies</h3>
        <input type="text" placeholder='Search...' className='bg-sky-100 mt-2 w-[200px] h-8'  value={search} onChange={e => setSearch(e.target.value)}/>

        <MovieListing />
    </div>
    

  )
}

export default Home