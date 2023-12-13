import { useCallback, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRequset } from "../../../hooks"

function Header(){

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const { results } = useRequset(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1`)
    const helperSearchRef = useRef(null)

    const handleSearchHelperValue = useCallback((movieTitle) => {
        helperSearchRef.current.focus()
        setInputValue(movieTitle)
    },[]) 
    
    
    return (
        <header className="flex justify-center">
            <div className="w-[101%] h-[110px] backdrop-blur-2xl px-12 py-8 fixed z-[9999]">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex space-x-1 text-2xl text-gray-100 items-end">
                        <p>MOVIE</p>
                        <p className="text-purple-600 text-6xl transition ease-in hover:scale-[1.2]">W</p>
                        <p>SMILE</p>
                    </Link>
                    <form 
                        onSubmit={ 
                            e => {
                                e.preventDefault()
                                if(inputValue.length > 0){
                                    navigate(`/search/${inputValue}`) 
                                }
                                setInputValue("")
                            }
                        } 
                        className="relative"
                    >
                        <div className="flex">
                            <input ref={helperSearchRef} className={`w-[150px] px-4 py-1.5 ${inputValue.length > 0 || results.length > 0 ? "rounded-tl-xl" : "rounded-tl-xl rounded-bl-xl"} outline-none text-lg text-gray-300 bg-purple-950`} minLength={3} name="searchInput" id="searchInput" value={inputValue} onChange={ e => setInputValue(e.target.value) } type="text" placeholder="Search"/>
                            <button type="submit" className={`w-[28px] bg-purple-950 ${inputValue.length > 0 || results.length > 0 ? "rounded-tr-xl" : "rounded-tr-xl rounded-br-xl"} p-2`}>
                                <img src="/media/images/search.png" alt="Search Icon" />
                            </button>
                        </div>
                        {
                            inputValue.length > 0 || results.length > 0 ? <div className="w-[178px] min-h-max rounded-b-2xl absolute bg-purple-950 text-gray-100">
                                {
                                    results.map(({original_title} ,id) => {
                                        return id < 3 ? <div onClick={() => {handleSearchHelperValue(original_title)}} key={id} className={`w-full h-[40px] ${id === 2 || results.length === id + 1 ? "rounded-b-2xl" : null} transition ease-in hover:bg-purple-800 flex justify-between`}>
                                            <p className={`w-full h-full flex items-center px-4`}>{original_title.length > 22 ? `${original_title.slice(0, 23)}...` : original_title}</p>
                                        </div> : null
                                    })
                                }
                            </div> : null
                        }
                    </form>
                </div>
            </div>
      </header>
    )
}

export default Header