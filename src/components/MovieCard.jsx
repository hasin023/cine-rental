import { useContext, useState } from "react"
import MovieRating from "./MovieRating"
import MovieDetails from "./MovieDetails"
import { MovieContext } from "../contexts/allContext"
import { toast } from 'react-toastify';

function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const { state, dispatch } = useContext(MovieContext);

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie)
        setShowModal(true)
    }

    const handleModalClose = () => {
        setSelectedMovie(null)
        setShowModal(false)
    }

    const handleAddToCart = (event, movie) => {
        event.preventDefault()

        const movieExists = state.cartData.find((cartMovie) => cartMovie.id === movie.id)
        if (movieExists) {
            toast.error(`${movie.title} already added ❌`)
            setShowModal(false)
            return
        }

        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...movie }
        })

        toast.success(`'${movie.title}' added successfully ✅`)

        setShowModal(false)
    }

    return (
        <>
            {showModal && <MovieDetails movie={selectedMovie} onClose={handleModalClose} onCartAdd={handleAddToCart} />}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={`/assets/movie-covers/${movie.cover}`} alt={movie.title} />
                </a>
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1 text-black dark:text-white">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <MovieRating rating={movie.rating} />
                    </div>
                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                        onClick={(e) => handleAddToCart(e, movie)}
                    >
                        <img src="/assets/tag.svg" alt={movie.title} />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    )
}

export default MovieCard
