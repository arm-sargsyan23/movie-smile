import { useRequset } from "../../../../../hooks"
import Actor from "./actor"

export default function MovieActors ({movieId}){

    const movieAllActorsData = useRequset(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`)
    const movieActors = movieAllActorsData.data.cast

    return (
        <>
            <div className="flex items-center">
                <div className="w-full h-[180px] mx-auto flex justify-center items-center px-5 py-5 space-x-5 gap-y-9 object-cover flex-wrap overflow-hidden">
                    {
                        movieActors !== undefined ? (
                            movieActors.length > 0 ? movieActors.map(({profile_path}, id) => {
                                return id < 7 ? <Actor key={id} profile_path={profile_path} /> : null
                            }) : <div className="flex justify-center items-center text-white">
                                <p className="[font-size:_clamp(2em,2vw,10em)]">Not found actors for this movie</p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}