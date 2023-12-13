import { useCallback, useEffect, useState } from "react"
import axios from "axios"

function useRequset (url){
    const [data, setData] = useState([])
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }   
    },[url]) 
        
    useEffect(() => {
        request()
    },[request])

    return {data, results, loading}
}
    

export default useRequset   