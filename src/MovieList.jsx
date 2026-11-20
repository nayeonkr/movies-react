import MovieCard from "./MovieCard.jsx"
import { tmdb } from './api.js'
import { useState, useEffect } from "react"
import { shape } from "./shape.js"



function MovieList() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    // 화면을 그린뒤에 할일을 지정하는 공간
        useEffect(() => {
        async function load() {
            const { results } = await tmdb('/movie/now_playing')
            const {genres} = await tmdb('/genre/movie/list')
            setMovies(results.map(m => shape(m, genres)))
        }

        load()
    }  , [])

    const shown = movies.filter(m => m.title.includes(query))

    return (
        <>
        <div className="tools">
            <input type="text" onChange={(e) => {setQuery(e.target.value) }} />
        </div>


            <div id="cards">
                { shown.map((movie)=> 
                    <MovieCard key={ movie.id } {...movie}/>
                )}
            </div>

        </>
    )
}

export default MovieList
