import React from 'react'
import Header from './Header/Header'
import TailerVideo from './TailerVideo';
import SecondConainer from './Movies/SecondConainer';
import usePopularMovie from './hooks/usePopularMovie';
import useTopRated from './hooks/useTopRatedMovie';
import usePlayNowMovies from './hooks/usePlayNow';
import useUpComingMovies from './hooks/useUpComingMovies';
import ExplorePage from './ExplorePage/ExplorePage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const exploreSearch = useSelector(store => store.explore.explorePage)

  usePopularMovie();
  useUpComingMovies();
  usePlayNowMovies();
  useTopRated();
  
  return (
    <div>
      <Header />
      {exploreSearch ? (
        <ExplorePage /> ) :( 
        <>
          <TailerVideo />
          <SecondConainer /> 
        </>  
      )}
    </div>
  )
}

export default Browse
