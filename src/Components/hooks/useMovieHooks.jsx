import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPlayNowMovie } from "../../utils/MovieSlice"
import { options } from "../../utils/Constains"

const usePlayMovie = () => {
    const dispach = useDispatch()

    const getMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const json = await data.json()
        console.log(json.results)
        dispach(addPlayNowMovie(json.results))
    } 
        useEffect(() => {
            getMovie()
        },[])   
}
 export default usePlayMovie








