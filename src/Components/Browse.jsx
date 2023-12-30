import React from 'react'
import Header from './Header/Header'
import TailerVideo from './TailerVideo';
import SecondConainer from './Movies/SecondConainer';
import usePopularMovie from './hooks/usePopularMovie';
import useTopRated from './hooks/useTopRatedMovie';
import usePlayNowMovies from './hooks/usePlayNow';
import useUpComingMovies from './hooks/useUpComingMovies';


const Browse = () => {

  usePopularMovie();
  useUpComingMovies();
  usePlayNowMovies();
  useTopRated();
  
  return (
    <div>
      <Header />
      <TailerVideo />
      <SecondConainer />
    </div>
  )
}

export default Browse
