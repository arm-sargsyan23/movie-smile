import { useParams } from "react-router-dom"
import MovieBar from "./movie-bar"
import SimilarsMovies from "./similars-movies"

export default function LocalMovie (){

    const { movieId, movieName } = useParams()

    return (
        <>
            <MovieBar movieId={movieId}/>
            <div className="text-4xl mt-[10px] mb-[20px] text-center text-white">
                <p>Similar Movies</p>
            </div>
            <SimilarsMovies movieName={movieName}/>
            
        </>
    )
}