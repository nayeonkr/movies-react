import MovieCard from "./MovieCard.jsx"
import { tmdb } from './api.js'
import { useState, useEffect } from "react"
import { shape } from "./shape.js"



function MovieList() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const [genreNames, setGenreNames] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('all')

    const [wishIds, setWishIds] = useState([])



    // 화면을 그린뒤에 할일을 지정하는 공간
        useEffect(() => {
        async function load() {
            const { results } = await tmdb('/movie/now_playing')
            const { genres } = await tmdb('/genre/movie/list')
            setMovies(results.map(m => shape(m, genres)))
            
            const shownGenres = genres.filter(genre => {
            // console.log(genre)
            const hasMovie = results.filter(movie => movie.genre_ids.includes(genre.id))
            console.log(hasMovie)
            // js에서 빈배열은 Boolean으로 형변환시 true로 판단
            return hasMovie.length > 0
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

    function toggleWish(id) {
        let next

        if (wishIds.includes(id)) {
            next = wishIds.filter(x => x !== id)
        } else {
            next = [...wishIds, id]
        }

        setWishIds(next)

    }
 
    return (
        <>
            <div className="tools">
                <input type="text" onChange={(e) => {setQuery(e.target.value) }} />
                {['all', ...genreNames].map(name =>
                <button
                    key={name}
                    onClick={() => { setSelectedGenre(name) }}
                    className={ name === selectedGenre ? 'on' : ''}
                >
                    {name}
                </button>
                )}
            </div>

            <div id="cards">
                { shown.map((movie)=> 
                    <MovieCard key={movie.id} {...movie} 
                    wish={ wishIds.includes(movie.id) } 
                    onWish={toggleWish}
                    />
                )}
            </div>

        </>
    )
}

export default MovieList
