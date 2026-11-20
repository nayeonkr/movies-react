function MovieCard({title, poster_path, vote_average, release_date, genre_ids}) {
    return (
    <div className="card">
        <img src={ poster_path } alt="movie" />
        <h3>{title}</h3>
        <p>{vote_average}, {release_date}</p>
        <p>{genre_ids.join(' / ')}</p>
    </div>
  )
}

export default MovieCard