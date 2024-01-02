import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-20 px-8 md:pt-40 md:px-20 absolute text-white bg-gradient-to-bl from-black '>
      <h1 className='font-bold text:2xl md:text-4xl'>{title}</h1>
      <p className='hidden md:inline-block h-[3%] md:h-[20%] md:w-2/4 py-1 md:py-3 '>{overview}</p> 
      <div className='py-[8%] md:p-2 md:py-4'>
        <button className='p-2 md:p-4 md:text-lg font-bold rounded-md text-blue-400 bg-white'>▶️Play</button>
        <button className='p-2 md:p-4 md:text-lg bg-slate-900 mx-2 rounded-md bg-opacity-50 text-white'>
          ❗More Info
          </button>
      </div>
      
    </div>
  )
}

export default VideoTitle
