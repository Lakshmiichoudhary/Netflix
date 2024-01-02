import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className='p-3 bg-black'>
      <h1 className='font-bold text-1xl md:text-3xl text-white pl-4 pb-2 md:pb-3'>{title}</h1>
      <div className='flex overflow-x-scroll hover:scale-110'>
        <div className='flex'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
         </div> 
      </div>
    </div>
  );
};

export default MovieList;
