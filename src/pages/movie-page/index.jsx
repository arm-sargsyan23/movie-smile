import { Link } from "react-router-dom"
import { LocalMovie } from "../../common"

export default function MoviePage (){

    return (
        <main className="relative mt-[130px] mb-[10px] min-h-max">
            <Link to={"/"} className="ml-[20px] absolute z-[10]">
                <img className="w-[50px] hover:scale-110 transition ease-in" src="/media/images/back-btn.png" alt="Back Button" />
            </Link>
            {/*Movie Container */}
            <LocalMovie/>
        </main>
    )
}