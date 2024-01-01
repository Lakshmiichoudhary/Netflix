import { useState,useEffect } from 'react';
import ExploreCard from './ExploreCard';
import image from '../../assets/image.png'

const API_URL = 'http://www.omdbapi.com/?apikey=d89d3a49';

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
    <img className='absolute -z-10' src={image} alt='background'/>
    <div className='pt-[7%]  flex justify-center'>
      <form className='bg-black p-[2%] w-[30%] bg-opacity-60 '>
        <input
          value={serachTerm}
          className='p-3 m-2 border-2 border-black'
          placeholder='Search Here........'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='p-3 rounded-md m-2 bg-blue-400'
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
          <div className="flex flex-wrap p-3 m-4 text-white bg-black bg-opacity-70">
            {movies.map((movie) => (
              <ExploreCard key={movie.imdbID} movie={movie} />

            ))}
          </div>
        ) : (
          <div className="p-3 justify-center flex m-5 font-bold text-red-800 text-7xl">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreBar;
