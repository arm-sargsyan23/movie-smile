import { Link } from "react-router-dom";


export default function MovieTrailer ({file_path, id, movieId}){
    return (
        <>
            <Link to={`/trailer/${movieId}/${id}`} className="relative w-[250px] h-[130px] rounded-2xl flex justify-center items-center transition ease-in hover:scale-105 hover:z-20">
                {<img className="w-full h-full object-cover rounded-2xl" src={ file_path === null || file_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${file_path}`} alt="Img Not Found" />}
                <img className="w-[40px] h-[40px] rounded-2xl absolute object-cover transition hover:opacity-70 ease-in" src="/media/images/play.png" alt="Play Icon" />
            </Link>
        </>
    )
}
