import { useRequset } from "../../../../hooks"
import SimilarMovie from "./similar-movie"

export default function SimilarsMovies({movieName}){

    const similarMoviesData = useRequset(`https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US&page=1`)
    const similarsMovies = similarMoviesData.results

    return (
        <>
            <div className="w-[90%] mx-auto min-h-max text-gray-100 p-8 rounded-3xl flex flex-wrap justify-center gap-5">
                {
                    similarsMovies.length > 1 ? similarsMovies.map(({poster_path, original_title, vote_average, vote_count, id}, i) => {
                        return i > 0 ? <SimilarMovie key={i} poster_path={poster_path} original_title={original_title} vote_average={vote_average} vote_count={vote_count} id={id} /> : null
                    }) : <div className="w-full h-[396px] backdrop-blur-2xl flex justify-center items-center text-5xl">
                        <p>Not found similar movie for your request</p>
                    </div>
                }
            </div>
        </>
    )
}