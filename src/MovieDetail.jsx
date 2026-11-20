import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { tmdb } from './api.js'


function MovieDetail() {
    
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [error, setError] = useState('')

    // useEffect(실행할함수, 어떤 데이터가 바뀔 때)
    useEffect(() => {
        async function load() {
            // const m = await tmdb(`/movie/${id}`)
            // console.log(m)
            try {
                setMovie(await tmdb(`/movie/${id}`)) // fetch()
            } catch (e) {
                setError(e.message)
                }
            }
            load()
        }, [id])
        
        if (error) return <p>영화를 불러오지 못했습니다.</p>


    return (
        <div className="detail">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h2>{ movie.title }</h2>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>

        </div>
    )
}
export default MovieDetail