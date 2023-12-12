import { useRequset } from "../../../hooks"
import TopMovie from "./top-movie"

export default function TopsMovies(){

  const topMovies = useRequset(process.env.REACT_APP_TOP_MOVIE_URL)

  return (
    <div>
      <div className="w-[100%] h-[280px] px-16 m-auto relative mt-[130px] space-y-4">
        <div>
          <p className="text-4xl text-white text-center">Top</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          {
            topMovies.results.length > 0 ? topMovies.results.map(({backdrop_path, id, original_title}, identificator) => identificator < 5 ? <TopMovie key={identificator} original_title={original_title} movieId={id} backdrop_path={backdrop_path}/> : null ) : null
          }
        </div>
      </div>
    </div>
  )
}