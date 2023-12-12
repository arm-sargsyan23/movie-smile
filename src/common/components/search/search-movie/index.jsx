import { Link } from "react-router-dom";

export default function SearchMovie({backdrop_path, original_title, release_date, vote_average, vote_count, id}){
    return (
        <Link to={`/localMovie/${id}/${original_title}`} className="w-auto min-h-[260px] backdrop-blur-xl rounded-2xl p-0.5 flex items-center px-10 text-white space-x-6">
            <img className="w-[520px] h-[190px] object-cover rounded-2xl" src={backdrop_path === null || backdrop_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="Rated Movie" />
            <div className="w-full h-[160px] p-2 flex-col text-xl">
                <div className="w-full space-y-5 font-bold flex-col items-center">
                    <p><span className="font-bold text-2xl">Name : </span>{original_title}</p>
                    <p><span className="font-bold text-2xl">Rating : </span>{vote_average}</p>
                    <p><span className="font-bold text-2xl">Views : </span>{vote_count}</p>
                    <p><span className="font-bold text-2xl">Release : </span>{release_date}</p>
                </div>
            </div>
        </Link>
    )
}