import React from 'react'

const ExploreCard = ({ movie: { Year, Poster, Title, Type } }) => {
  return (
    <div className="w-[20%] flex-wrap p-3 hover:scale-110" >
        {Poster !== 'N/A' && (
        <>
          <img className='flex' src={Poster} alt={Title} />
          <p>{Year}</p>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </>
        )}
</div>
)
}

export default ExploreCard
