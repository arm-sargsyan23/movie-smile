import { useNavigate } from "react-router-dom"
import SearchMovies from "../../common/components/search"

export default function SearchPage(){

    const navigate = useNavigate()
    
    return (
        <main className="w-[80%] min-h-full mx-auto mb-[10px] mt-[130px]">
            <div onClick={() => {navigate(-1)}} className="ml-[-170px] absolute z-[10]">
                <img className="w-[50px] hover:scale-110 transition ease-in" src="/media/images/back-btn.png" alt="Back Button" />
            </div>
            {/*Search page */}
            <SearchMovies/>
        </main>
    )
}   