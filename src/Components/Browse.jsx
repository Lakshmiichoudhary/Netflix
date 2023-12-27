import React from 'react'
import Header from './Header/Header'
import usePlayMovie from './hooks/useHooks'
import TailerVideo from './TailerVideo';
import SecondConainer from './SecondConainer';

const Browse = () => {

  usePlayMovie();
  return (
    <div>
      <Header />
      <TailerVideo />
      <SecondConainer />
    </div>
  )
}

export default Browse
