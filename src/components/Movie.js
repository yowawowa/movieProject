const Movie = ({ name, poster, rating, shortDescription }) => {

    const imgSource = poster.previewUrl == null ? poster == null ? '' : poster : poster.previewUrl
    const ratingSource = rating.kp == null ? rating : rating.kp
    const description = shortDescription.length === 0 ? 'Sorry, there is no description' : shortDescription
    const ratingStyle = ratingSource < 5 ? 'border: 2px solid red' : ratingSource < 7 ? { border: '2px solid orange' } : { border: '2px solid green' }


    return (
        <div className="movie__block">
            <img src={imgSource} alt={name} />
            <h3 className='movie__title'>{name}</h3>
            <div class='movie__desc'>{description}</div>
            <div class='movie__average' style={ratingStyle}>{ratingSource.toFixed(1)}</div>
        </div >
    )
}

export default Movie