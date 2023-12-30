import { useEffect } from 'react';
import { addUpComingMovies } from '../../utils/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/Constains';

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  
    const getUpComingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
    };
  
    useEffect(() => {
      !upComingMovies && getUpComingMovies();
    }, []);
  };
  

export default useUpComingMovies
