import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../../utils/MovieSlice"
import { options } from "../../utils/Constains"

const usePlayNowMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
       "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default usePlayNowMovies;








