import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../../utils/MovieSlice"
import { options } from "../../utils/Constains"

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

 export default usePopularMovie

