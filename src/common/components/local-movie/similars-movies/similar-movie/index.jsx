import { Link } from "react-router-dom";

export default function SimilarMovie({poster_path, original_title, vote_average, vote_count, id}){
    return (
        <>
            <Link to={`/localMovie/${id}/${original_title}`} className="w-[280px] h-[260px] backdrop-blur-xl rounded-2xl p-1">
                <img className="w-full h-[190px] object-cover rounded-t-2xl hover:rounded-2xl transition hover:scale-105 ease-in" src={poster_path === null || poster_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${poster_path}`} alt="Popular Movie" />
                <div className="w-[100%] h-[70px] p-2 flex items-center justify-between text-xl">
                    <div className="w-[70%] font-bold flex-col items-end">
                        <p>{original_title.length > 20 ? `${original_title.slice(0 , 19)}...` : original_title}</p>
                    </div>
                    <div className="30% font-bold">
                        <p>{vote_average}</p>
                        <p>{vote_count}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}