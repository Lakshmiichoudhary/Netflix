import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-40 px-20 absolute text-white bg-gradient-to-bl from-black '>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='p-1 w-2/4 py-3'>{overview}</p> 
      <div className='p-1 py-6'>
        <button className='p-4 text-lg font-bold rounded-md text-blue-400 bg-white'>▶️Play</button>
        <button className='p-4 text-lg bg-slate-900 mx-2 rounded-md bg-opacity-50 text-white'>
          ❗More Info
          </button>
      </div>
      
    </div>
  )
}

export default VideoTitle
