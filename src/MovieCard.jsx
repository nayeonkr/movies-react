function MovieCard({title, poster, genres, rating, date}) {
    return (
        <div className="card">
            <img src={poster} alt="movie" />
            <h3>{title}</h3>
            <p>{rating}, {date}</p>
            <p>{genres.join(' / ')}</p>
        </div>
    )
}

export default MovieCard