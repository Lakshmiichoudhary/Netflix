import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const TailerVideo = () => {
    const movies = useSelector((store) => store.movie?.playNowMovie) 
    if(!movies) return

    const mainMovie = movies[0]
        console.log(mainMovie)
    
    const {original_title,overview} = mainMovie    
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground />
    </div>
  )
}

export default TailerVideo
