import { useRequset } from "../../../../../hooks"
import MovieTrailer from "./movie-trailer"

export default function MovieTrailerNavigate ({movieId}){

    const imgagesData = useRequset(` https://api.themoviedb.org/3/movie/${movieId}/images`)

    return (
        <>
            <div className="w-full h-[40%] flex items-center justify-center px-5 space-x-4">
                {
                    imgagesData.data.backdrops !== undefined || imgagesData.data.length > 0 ? imgagesData.data.backdrops.map(({file_path}, id) => {
                        return id < 5 ? <MovieTrailer key={id} file_path={file_path} id={id} movieId={movieId} /> : null
                    }) : null
                }
            </div>
        </>
    )
}