import PopularsMovies from "../../common/components/populars-movies"
import RatedsMovies from "../../common/components/rateds-movies"
import TopsMovies from "../../common/components/tops-movies"

export default function MainPage (){
  return (
    <main className="w-[80%] mx-auto">
      <div>
        {/*Tops movies*/}
        <TopsMovies/>

        {/*populars movies*/}
        <PopularsMovies/>

        {/*rateds movies*/}
        <RatedsMovies/>
      </div>
    </main>
  )
}