import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-40 px-20 '>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='p-1 w-2/4'>{overview}</p> 
      <div>
        <button className='p-4 text-lg font-bold rounded-md'>▶️Play</button>
        <button className='p-4 text-lg bg-slate-900 mx-2 rounded-md bg-opacity-40 text-white'>
          ❗More Info
          </button>
      </div>
      
    </div>
  )
}

export default VideoTitle
