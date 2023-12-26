import { useRequest } from "../../../hooks"
import RatedMovie from "./rated-movie"

export default function RatedsMovies (){

    const ratedMovies = useRequest(process.env.REACT_APP_RATED_MOVIE_URL)

    return (
      <>
        {
          ratedMovies.loading ? <div className="w-full animate-pulse h-[296px] mb-[30px] mx-auto rounded-3xl backdrop-blur-xl"></div> : <div>
              <div className="relative flex justify-center">
                <div className="absolute">
                  <p className="text-4xl text-white text-center">Rated Movie</p>
                </div>
                  
                <div className="min-h-max text-gray-100 p-4 rounded-xl flex flex-wrap justify-center gap-5 mt-[30px]">
                  {
                    ratedMovies.results.length > 0 ? ratedMovies.results.map(({backdrop_path, original_title, vote_average, vote_count, id}, identificator) => <RatedMovie key={identificator} movieId={id} backdrop_path={backdrop_path} original_title={original_title} vote_average={vote_average} vote_count={vote_count}/>) : null
                  }
                  
                </div>
              </div>
          </div>
        }
      </>
    )
}