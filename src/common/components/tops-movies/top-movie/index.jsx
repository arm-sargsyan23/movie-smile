import { Link } from "react-router-dom";

export default function TopMovie ({backdrop_path, movieId, original_title}){
    return (
        <Link to={`/localMovie/${movieId}/${original_title}`} className="w-[240px] rounded-2xl h-[220px]">
            <img className="pointer-events-none object-cover h-[220px] rounded-xl transition hover:scale-105 ease-in hover:rounded-xl" src={backdrop_path === null || backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="Top Movie" /> 
        </Link>
    )
}