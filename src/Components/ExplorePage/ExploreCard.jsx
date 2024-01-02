import React from 'react'

const ExploreCard = ({ movie: { Year, Poster, Title, Type } }) => {
  return (
    <div className="w-[50%] md:w-[20%] flex-wrap p-2 md:p-3 hover:scale-110 bg-black" >
        {Poster !== 'N/A' && (
        <>
          <img className='flex' src={Poster} alt={Title} />
          <p>{Year}</p>
          <span className='hidden md:inline-block'>{Type}</span>
          <h3 className=''>{Title}</h3>
        </>
        )}
</div>
)
}

export default ExploreCard
