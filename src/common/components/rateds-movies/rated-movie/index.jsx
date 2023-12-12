import { Link } from "react-router-dom";

export default function RatedMovie ({backdrop_path, original_title, vote_average, vote_count, movieId}){
    return (
        <Link to={`/localMovie/${movieId}/${original_title}`} className="w-[280px] h-[260px] backdrop-blur-xl rounded-2xl p-0.5 flex-col items-center">
            <img className="h-[190px] object-cover rounded-tr-2xl rounded-tl-2xl transition hover:scale-105 ease-in hover:rounded-2xl" src={backdrop_path === null && backdrop_path === undefined ? `/media/images/no-pic.png` : `${process.env.REACT_APP_IMG_HOST}${backdrop_path}`} alt="Rated Movie" />
            <div className="w-[100%] h-[70px] p-2 flex items-center justify-between text-xl">
                <div className="w-[70%] font-bold flex-col items-end">
                    <p>{original_title}</p>
                </div>
                <div className="30% font-bold">
                    <p>{vote_average}</p>
                    <p>{vote_count}</p>
                </div>
            </div>
        </Link>
    )
}