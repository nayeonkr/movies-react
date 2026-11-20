import MovieCard from "./MovieCard.jsx"
import { tmdb } from './api.js'
import { useState, useEffect } from "react"
import { shape } from "./shape.js"



function MovieList() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const [genreNames, setGenreNames] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('all')


    // 화면을 그린뒤에 할일을 지정하는 공간
        useEffect(() => {
        async function load() {
            const { results } = await tmdb('/movie/now_playing')
            const { genres } = await tmdb('/genre/movie/list')
            setMovies(results.map(m => shape(m, genres)))
            const shownGenres = genres.filter(genre => {
                const hasMovie = results.filter(movie=> movie.genre_ids.includes(genre.id))
                return hasMovie
            })
        
        setGenreNames(shownGenres.map(g => g.name))
        //  setGenreNames(genres.map(g => g.name))
        }
        load()
    }  , [])


    const shown = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()))

    if (selectedGenre !== 'all') {
        shown.filter(m => m.genre_ids.includes(selectedGenre))
    }
    return (
        <>
        <div className="tools">
            <input type="text" onChange={(e) => {setQuery(e.target.value) }} />
            {['all', ...genreNames].map(name =>
            <button
                key={name}
                onClick={() => { setSelectedGenre(name) }}
            >
                {name}
            </button>
            )}
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
