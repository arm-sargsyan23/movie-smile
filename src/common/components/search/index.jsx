import { useParams } from "react-router-dom"
import { useRequest } from "../../../hooks"
import SearchMovie from "./search-movie"

export default function SearchMovies (){
    const {searchText} = useParams()
    const searchMovies = useRequest(`https://api.themoviedb.org/3/search/movie?query=${searchText}&language=en-US&page=1`)
    return <div>
        {
            searchMovies.loading ? <div className="w-full animate-pulse h-[696px] mx-auto rounded-3xl backdrop-blur-xl"></div> : <div className="space-y-4">
                {
                    searchMovies.results.length > 0 ? searchMovies.results.map(({backdrop_path, original_title, release_date, vote_average, vote_count, id}, identificator) => {
                        return <SearchMovie key={identificator} backdrop_path={backdrop_path} original_title={original_title} release_date={release_date} vote_average={vote_average} vote_count={vote_count} id={id}/>
                    }): <div className="w-full h-[696px] backdrop-blur-2xl rounded-2xl flex justify-center items-center text-white">
                        <p className="text-6xl">Not found movies for yours request</p>
                    </div>
                }
            </div>
        }
    </div>
}