import { Link } from 'react-router'


function MovieCard({id, title, poster_path, vote_average, release_date, genre_ids}) {
    return (
    <Link className="card" to={`/movies/${id}`}>
        <img src={ poster_path } alt="movie" />
        <h3>{title}</h3>
        <p>{vote_average}, {release_date}</p>
        <p>{genre_ids.join(' / ')}</p>
    </Link>
  )
}

export default MovieCard