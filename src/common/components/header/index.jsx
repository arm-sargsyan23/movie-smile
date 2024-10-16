/* react */
import { useState, useContext } from "react"
/* react router dom */
import { Link, useNavigate } from "react-router-dom"
/* hooks */
import { useRequest } from "../../../hooks"
/* constexts */
import { filterContext } from "../../../contexts/filter-movie-context"

function Header(){
    const [ inputValue, setInputValue ] = useState("")
    const navigate = useNavigate()
    const { results } = useRequest(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1`)
    const [ handleInputHelper, setHandleInputHelper ] = useState(true)

    const { setFilterMovie } = useContext(filterContext)

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
                            <div onClick={() => { setFilterMovie("flex") }} className="mr-[20px] flex bg-purple-950 rounded-xl px-[8px] cursor-pointer hover:scale-105 transition ease-in">
                                <img className="w-[28px] p-[7px]" src="/media/images/filter.png" alt="filter icon" />
                            </div>
                            <div>
                                <div className="flex">
                                    <input value={inputValue} onChange={ e => setInputValue(e.target.value)} autocomplete="off" onFocus={() => {setHandleInputHelper(true)}} className={`w-[150px] px-4 py-1.5 ${results.length === 0 ? "rounded-bl-xl" : null} ${handleInputHelper === false ? "rounded-bl-xl" : null} ${inputValue.length > 0 || results.length > 0 ? "rounded-tl-xl" : "rounded-tl-xl rounded-bl-xl"} outline-none text-lg text-gray-300 bg-purple-950`} minLength={3} name="searchInput" id="searchInput" type="text" placeholder="Search"/>
                                    <button type="submit" className={`w-[28px] bg-purple-950 ${results.length === 0 ? "rounded-br-xl" : null} ${handleInputHelper === false ? "rounded-br-xl" : null} ${inputValue.length > 0 || results.length > 0 ? "rounded-tr-xl" : "rounded-tr-xl rounded-br-xl"} p-2`}>
                                        <img src="/media/images/search.png" alt="Search Icon" />
                                    </button>
                                </div>
                                {
                                    handleInputHelper ? <div>
                                        {
                                            inputValue.length > 0 || results.length > 0 ? <div className="w-[178px] min-h-max rounded-b-2xl absolute bg-purple-950 text-gray-100">
                                                {
                                                    results.map(({original_title, id} ,i) => {
                                                        return i < 3 ? <Link to={`/localMovie/${id}/${original_title}`} onClick={() => {setHandleInputHelper(false)}} key={i} className={`w-full h-[40px] ${i === 2 || results.length === i + 1 ? "rounded-b-2xl" : null} transition ease-in hover:bg-purple-800 flex justify-between`}>
                                                            <p className={`w-full h-full flex items-center px-4`}>{original_title.length > 22 ? `${original_title.slice(0, 23)}...` : original_title}</p>
                                                        </Link> : null
                                                    })
                                                }
                                            </div> : null
                                        }
                                    </div> : null
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </header>
    )
}

export default Header