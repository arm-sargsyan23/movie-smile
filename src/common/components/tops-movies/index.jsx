import { useRequset } from "../../../hooks"
import TopMovie from "./top-movie"

export default function TopsMovies(){

  const topMovies = useRequset(process.env.REACT_APP_TOP_MOVIE_URL)

  return (
    <>
      {
        topMovies.loading ? <div className="w-full animate-pulse h-[296px] mt-[130px] mb-[30px] rounded-3xl backdrop-blur-xl"></div> : <div>
          <div className="w-[100%] h-[280px] px-1 relative mt-[130px] space-y-2 overflow-y-hidden">
            <div>
              <p className="text-4xl text-white text-center">Top</p>
            </div>
            <div className="flex items-center justify-center h- space-x-4 gap-y-6 flex-wrap p-3">
              {
                topMovies.results.length > 0 ? topMovies.results.map(({backdrop_path, id, original_title}, identificator) => identificator < 7 ? <TopMovie key={identificator} original_title={original_title} movieId={id} backdrop_path={backdrop_path}/> : null ) : null
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}