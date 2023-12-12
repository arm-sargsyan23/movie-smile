import { useCallback, useEffect, useState } from "react"
import axios from "axios"

function useRequset (url){
    const [data, setData] = useState([])
    const [results, setResults] = useState([])

    const request = useCallback( async () => {
            try {
                const response = await axios({
                    url,
                    headers: {
                        Authorization: process.env.REACT_APP_AUTHORIZATION
                    }
                })
                if(response.data !== undefined){
                    setData(response.data)
                    setResults(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }   
    },[url]) 
        
    useEffect(() => {
        request()
    },[request])

    return {data, results}
}
    

export default useRequset   