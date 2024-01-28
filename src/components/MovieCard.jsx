import { useState } from "react"
import MovieRating from "./MovieRating"
import MovieDetails from "./MovieDetails"

function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie)
        setShowModal(true)
    }

    const handleModalClose = () => {
        setSelectedMovie(null)
        setShowModal(false)
    }

    return (
        <>
            {showModal && <MovieDetails movie={selectedMovie} onClose={handleModalClose} />}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={`/assets/movie-covers/${movie.cover}`} alt={movie.title} />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1 text-black">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <MovieRating rating={movie.rating} />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src="/assets/tag.svg" alt={movie.title} />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>
    )
}

export default MovieCard
