import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../../utils/MovieSlice"
import { options } from "../../utils/Constains"

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

 export default useTopRated

