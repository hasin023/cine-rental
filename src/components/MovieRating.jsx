function MovieRating({ rating }) {
    const stars = Array(rating).fill('/assets/star.svg')

    return (
        <div className="flex items-center space-x-1">
            {stars.map((star, index) => (
                <img key={index} src={star} alt="star" />
            ))}
            <span className="text-[#575A6E] text-sm" >({rating})</span >
        </div>

    )
}

export default MovieRating
