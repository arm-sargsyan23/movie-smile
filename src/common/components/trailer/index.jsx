import { useRequset } from "../../../hooks"
import { useParams } from "react-router-dom"

export default function Trailer(){

    const { movieId, trailerId } = useParams()
    const { results } = useRequset(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`)

    return (
        <>
            <div className="relative w-[80%] h-[696px] mx-auto rounded-2xl flex justify-center items-center backdrop-blur-2xl p-8">
                {
                    results.length > 0 && results.length > trailerId ? <iframe className="w-full h-full object-cover rounded-3xl" name="movieTrailer" title="movieTrailer" src={`https://www.youtube.com/embed/${results.length > 0 ? results[trailerId].key : null}`}></iframe> : <p className="w-full h-full flex justify-center items-center text-6xl text-white">Not found trailer, our developers are working on it</p>
                }
            </div>
        </>
    )
}