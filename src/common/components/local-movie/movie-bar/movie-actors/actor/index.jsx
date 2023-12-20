export default function Actor ({profile_path}){
    return (
        <>
            <img className="w-[130px] h-[140px] rounded-2xl object-cover transition hover:scale-110 ease-in" src={profile_path === null || profile_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${profile_path}`} alt="Actor Movie" />
        </>
    )
}