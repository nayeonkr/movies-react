import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { tmdb } from './api.js'
import { useWish  } from './useWish.jsx'

function MovieDetail() {
    
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState('')
    const { wishIds, toggleWish } = useWish()

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
        if (!movie) return <p>영화를 불러오는 중입니다.</p>


    return (
        <>
        <div className="detail">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <div>
            <h2>{movie.title }</h2>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
            </div>
        </div>
        <button onClick={() => {toggleWish(movie.id) }}>
            { wishIds.includes(movie.id) ? '❤️' : '🩶'}wish
        </button>
        </>
    )
}
export default MovieDetail