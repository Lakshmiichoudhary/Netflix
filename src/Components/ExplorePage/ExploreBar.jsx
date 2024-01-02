import { useState,useEffect } from 'react';
import ExploreCard from './ExploreCard';
import image from '../../assets/image.png'
import { API_URL } from '../../utils/Constains';

const ExploreBar = () => {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);
  
  return (
    <>
    <img className='absolute -z-10 h-screen object-cover w-screen'  src={image} alt='background'/>
    <div className='pt-10 md:pt-[7%]  flex justify-center'>
      <form className='bg-black p-[4%] md:p-[2%] m-4 md:m-0  md:w-[30%] bg-opacity-60 '>
        <input
          value={serachTerm}
          className='p-2 md:p-3 m-2 border-2 border-black'
          placeholder='Search Here........'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='p-2 md:p-3 rounded-md m-2 bg-blue-400'
          onClick={(e)  => { 
            e.preventDefault()
            searchMovies(serachTerm)
          }}
        >
          Search
        </button>
      </form>
      </div>
      <div>
      {movies?.length > 0 ? (
          <div className="flex flex-wrap p-2 md:p-1 m-2 text-white bg-black bg-opacity-70">
            {movies.map((movie) => (
              <ExploreCard key={movie.imdbID} movie={movie} />

            ))}
          </div>
        ) : (
          <div className="p-2 justify-center flex m-5 font-bold bg-black text-white bg-opacity-50 md:text-7xl">
            <h2>Begin Your Entertainment Journey</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreBar;
