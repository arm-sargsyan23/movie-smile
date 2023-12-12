export default function Actor ({profile_path}){
    return (
        <>
            <div className="w-[140px] h-[140px]">
                <img className="w-full h-full rounded-2xl object-cover transition hover:scale-110 ease-in" src={profile_path === null || profile_path === undefined ? `/media/images/noPic.png` : `${process.env.REACT_APP_IMG_HOST}${profile_path}`} alt="Actor Movie" />
            </div>
        </>
    )
}