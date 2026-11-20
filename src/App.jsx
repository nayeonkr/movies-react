import MovieList from "./MovieList.jsx"
import MovieDetail from "./MovieDetail.jsx"
import MovieSearch from "./MovieSearch.jsx"
import { Routes, Route , Link }from 'react-router'

function App() {
    return (
        <>
            <nav className="tools">
                {/* <a href="/">메인페이지</a> */}
                <Link to="/">상영중영화</Link>
                <Link to="/search">영화검색</Link>
            </nav>
            <Routes>
                <Route path='/' element={ <MovieList/> }/>
                <Route path='/search' element={<MovieSearch/>} />
                {/* @app.get('/movies/{movie_id}') */}
                <Route path='/movies/:id' element={ <MovieDetail/> }/>
            </Routes>
        </>
    )
}

export default App