import { useRequset } from "../../../../hooks"
import MovieActors from "./movie-actors"
import MovieTrailerNavigate from "./movie-trailer-navigate"

export default function MovieBar ({movieId}){

    const movieAllData = useRequset(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`)
    const movieData = movieAllData.data

    return (
        <>
            {
                movieAllData.loading ? <div className="w-[90%] animate-pulse h-[696px] mx-auto rounded-3xl backdrop-blur-xl"></div> : 
                <div className="w-[90%] h-[696px] backdrop-blur-2xl mx-auto rounded-3xl p-10 space-x-3">
                    <div className="w-full h-[450px]">
                        <div className="w-full h-full flex space-x-4">
                            <div className="w-[35%] h-full">
                                <img className="w-full h-full rounded-xl object-cover object-center pointer-events-none" src={movieData.backdrop_path === null || movieData.backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${movieData.backdrop_path}`} alt="movie" />
                            </div>
                            <div className="w-[65%] h-full">
                                <div className="w-full h-[60%] px-5 text-3xl text-white space-y-5 py-5">
                                    {movieData.original_title !== undefined ? <p><span className="font-bold">Name : </span>{movieData.original_title}</p> : null}
                                    {movieData.vote_average !== undefined ? <p><span className="font-bold">Rating : </span>{movieData.vote_average.toFixed(1)}</p> : null}
                                    {movieData.vote_count !== undefined ? <p><span className="font-bold">Views : </span>{movieData.vote_count !== undefined ? movieData.vote_count : null}</p> : null}
                                    {movieData.release_date !== undefined ? <p><span className="font-bold">Release : </span>{movieData.release_date}</p> : null}
                                    {movieData.overview !== undefined ? <p><span className="font-bold">OverView : </span>{movieData.overview.length >= 30 ? `${movieData.overview.slice(0, 160)}...` : movieData.overview}</p> : null}
                                </div>
                                <MovieActors movieId={movieId} />
                            </div>
                        </div>
                    </div>
                    <MovieTrailerNavigate movieId={movieId} />
                </div>
            }           
        </>
    )
}