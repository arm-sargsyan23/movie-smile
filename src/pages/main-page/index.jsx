/* components */
import { useContext, useState } from "react"
import PopularsMovies from "../../common/components/populars-movies"
import RatedsMovies from "../../common/components/rateds-movies"
import TopsMovies from "../../common/components/tops-movies"

/* contexts */
import { filterContext } from "../../contexts/filter-movie-context"
import { useRequest } from "../../hooks"
/* axios */
import axios from "axios"
/* react */
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function MainPage (){

  const { filterMovie, setFilterMovie } = useContext(filterContext)
  const { data } = useRequest("https://api.themoviedb.org/3/genre/movie/list?language=en")
  const moviesGenres = data?.genres

  const [firstMovies, setFirstMovies] = useState([])
  const [secondMovies, setSecondMovies] = useState([])
  const [thirdMovies, setThirdMovies] = useState([])

  useEffect(() => {
    async function allFilteringMovies(){
      const allMovies = ( await Promise.allSettled([
        await axios({ url: process.env.REACT_APP_TOP_MOVIE_URL , headers: {Authorization: process.env.REACT_APP_AUTHORIZATION}}),
        await axios({ url: process.env.REACT_APP_POPULAR_MOVIE_URL , headers: {Authorization: process.env.REACT_APP_AUTHORIZATION}}),
        await axios({ url: process.env.REACT_APP_RATED_MOVIE_URL , headers: {Authorization: process.env.REACT_APP_AUTHORIZATION}})
      ]))

      setFirstMovies(allMovies[0]?.value?.data?.results)
      setSecondMovies(allMovies[1]?.value?.data?.results)
      setThirdMovies(allMovies[2]?.value?.data?.results)
    }
    allFilteringMovies()
  },[])

  console.log(firstMovies);

  return (
    <main className="w-[90%] mx-auto">
      {/* filter movie*/}
      <div className={`fixed bg-black bg-opacity-75 bottom-0 top-0 left-0 right-0 z-[10000] ${filterMovie} items-center`} >
        <div className="w-[20%] max-h-[41%] fixed left-[10%] overflow-auto backdrop-blur-2xl rounded-[3rem]">
          <div className="h-full flex flex-col justify-between">
            <div className="p-7 flex flex-wrap gap-5 justify-center items-center">
              {
                moviesGenres !== undefined ? moviesGenres.map( ( { name } , i) => {
                  return <div key={i} className="max-w-max h-[30px] bg-purple-950 rounded-[2rem] text-white p-3 flex justify-center items-center object-scale-down hover:scale-105 transition ease-in cursor-pointer">{name}<img className="w-[28px] p-1" src="media/images/plus.png" alt="plus icon" /></div>
                }) : null
              }
            </div>
            <div className="w-[90%] h-[30px] mx-auto bg-purple-950 rounded-[1rem] flex justify-center items-center text-2xl text-gray-400 mb-[20px] hover:scale-95 transition ease-in cursor-pointer">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[80%] backdrop-blur-2xl rounded-[3rem] fixed right-[10%]">
          <div className="w-full h-[80px] flex justify-end p-7">
            <div className="cursor-pointer" onClick={() => {setFilterMovie("hidden")}}>
              <img className="w-[28px]" src="media/images/cross.png" alt="cross" />
            </div>
          </div>
          <div className="w-full max-h-[86%] flex flex-col overflow-auto p-4 gap-y-5">
            {
              firstMovies.length > 0 ? firstMovies.map(( { backdrop_path, original_title, release_date, vote_count, overview, vote_average, id }, i ) => {
                return (
                  <Link to={`/localMovie/${id}/${original_title}`} key={i} className="bg-purple-950 p-2 rounded-[2rem] hover:scale-[0.99] transition ease-in flex">
                    <div className="relative">
                      <p className="w-[30px] h-[30px] absolute rounded-[1rem] bg-purple-700 flex justify-center items-center text-xl right-[6px] top-[6px] opacity-[0.7] text-white">{vote_average}</p>
                      <img className="w-[120px] h-[120px] object-cover rounded-[2rem]" src={backdrop_path === null || backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="movie img" />
                    </div>
                    <div className="w-[80%] h-[120px] p-3 text-xl text-white">
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{original_title}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{release_date}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{vote_count}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>{overview}</p>
                    </div>                      
                  </Link>
                )
              }) : null
            } 
            {
              secondMovies.length > 0 ? firstMovies.map(( { backdrop_path, original_title, release_date, vote_count, overview, vote_average, id }, i ) => {
                return (
                  <Link to={`/localMovie/${id}/${original_title}`} key={i} className="bg-purple-950 p-2 rounded-[2rem] hover:scale-[0.99] transition ease-in flex">
                    <div className="relative">
                      <p className="w-[30px] h-[30px] absolute rounded-[1rem] bg-purple-700 flex justify-center items-center text-xl right-[6px] top-[6px] opacity-[0.7] text-white">{vote_average}</p>
                      <img className="w-[120px] h-[120px] object-cover rounded-[2rem]" src={backdrop_path === null || backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="movie img" />
                    </div>
                    <div className="w-[80%] h-[120px] p-3 text-xl text-white">
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{original_title}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{release_date}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{vote_count}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>{overview}</p>
                    </div>                      
                  </Link>
                )
              }) : null
            } 
            {
              thirdMovies.length > 0 ? firstMovies.map(( { backdrop_path, original_title, release_date, vote_count, overview, vote_average, id }, i ) => {
                return (
                  <Link to={`/localMovie/${id}/${original_title}`} key={i} className="bg-purple-950 p-2 rounded-[2rem] hover:scale-[0.99] transition ease-in flex">
                    <div className="relative">
                      <p className="w-[30px] h-[30px] absolute rounded-[1rem] bg-purple-700 flex justify-center items-center text-xl right-[6px] top-[6px] opacity-[0.7] text-white">{vote_average}</p>
                      <img className="w-[120px] h-[120px] object-cover rounded-[2rem]" src={backdrop_path === null || backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="movie img" />
                    </div>
                    <div className="w-[80%] h-[120px] p-3 text-xl text-white">
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{original_title}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{release_date}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical"}}>{vote_count}</p>
                      <p style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>{overview}</p>
                    </div>                      
                  </Link>
                )
              }) : null
            } 
          </div>
        </div>
      </div>
      <div>
        {/* Tops movies */}
        <TopsMovies />

        {/* populars movies */}
        <PopularsMovies />

        {/* rateds movies */}
        <RatedsMovies />
      </div>
    </main>
  )
}