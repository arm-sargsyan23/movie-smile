import { useNavigate } from "react-router-dom"
import { Trailer } from "../../common"

export default function TrailerPage (){

    const navigate = useNavigate()

    return (
        <main className="relative w-full min-h-max mt-[130px] mb-[10px]">
            <div onClick={() => {navigate(-1)}} className="ml-[20px] absolute z-[10]">
                <img className="w-[50px] hover:scale-110 transition ease-in" src="/media/images/back-btn.png" alt="Back Button" />
            </div>
            <Trailer/>
        </main>
    )
}