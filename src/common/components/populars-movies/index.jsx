import { useRequset } from "../../../hooks"
import PopularMovie from "./popular-movie"

export default function PopularsMovies (){
    
    const popularMovies = useRequset(process.env.REACT_APP_POPULAR_MOVIE_URL)

    return (
      <>
        {
          popularMovies.loading ? <div className="w-full animate-pulse h-[296px] mb-[30px] mx-auto rounded-3xl backdrop-blur-xl"></div> : <div>
              <div className="relative flex justify-center">
                <div className="absolute">
                  <p className="text-4xl text-white text-center">Popular Movie</p>
                </div>

                <div className=" text-gray-100 p-4 rounded-xl flex flex-wrap justify-center gap-5 mt-[30px]">
                  {
                    popularMovies.results.length > 0 ? popularMovies.results.map(({backdrop_path, original_title, vote_average, vote_count, id}, identificator) => <PopularMovie key={identificator} movieId={id} backdrop_path={backdrop_path} original_title={original_title} vote_average={vote_average} vote_count={vote_count}/>) : null
                  }         
                </div>
              </div>
          </div>
        }
      </>
    )
}