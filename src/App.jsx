import MovieCard from "./MovieCard"
import { tmdb } from './api.js'
import { useState, useEffect } from "react"

const sample = [
  {
    id: 1263337,
    title: '하트 오브 비스트',
    poster: 'https://image.tmdb.org/t/p/w342/zC4E522V1n3H4SGdYOaiqhF5DnS.jpg',
    genres: ['모험', '스릴러'],
    rating: '7.6',
    date: '2026-10-28',
  },
  {
    id: 1101412,
    title: '폴2: 데드포인트',
    poster: 'https://image.tmdb.org/t/p/w342/v62qy8mNmseNhhsB2SXfpnbu741.jpg',
    genres: ['스릴러'],
    rating: '7.2',
    date: '2026-11-11',
  },
]

function App() {
    const [movies, setMovies] = useState([])

    // 화면을 그린뒤에 할일을 지정하는 공간
        useEffect(() => {
        async function load() {
            const { results } = await tmdb('/movie/now_playing')
            setMovies(results)
        }

        load()
    }  , [])

    return (
        <>
            <div id="cards">
                { movies.map((movie)=> 
                    <MovieCard key={ movie.id } {...movie}/>
                )}
            </div>

        </>
    )
}

export default App
