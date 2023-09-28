const Movie = ({ name, poster, rating, shortDescription }) => {
    return (
        <div className="movie__block">
            <img src={poster.previewUrl} alt={name} />
            <h3 className='movie__title'>{name}</h3>
            <div class='movie__desc'>{shortDescription}</div>
            <div class='movie__average'>{rating.kp.toFixed(1)}</div>
        </div>
    )
}

export default Movie