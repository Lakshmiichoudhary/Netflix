import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondConainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
      <div className='-mt-72 '>
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Up coming"} movies={movies.upComingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    )
};


export default SecondConainer 
