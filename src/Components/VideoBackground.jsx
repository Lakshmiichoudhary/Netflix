import React, { useEffect, useState } from 'react'
import { options } from "../utils/Constains"

const VideoBackground = ({movieId}) => {
  const [trailerId,setTrailerId] = useState(null)

  const getVideoBackground = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options)
    const json = await data.json();

    const filterTrailer = json.results.filter(video => video.type === "Trailer")
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    setTrailerId(trailer.key)
  }

  useEffect(() =>{
    if (movieId) {
      getVideoBackground();
    }
  }, [movieId])

  return (
    <div>
      <iframe className='md:py-0 w-screen aspect-video' 
      src={"https://www.youtube.com/embed/"+ trailerId + "?&autoplay=1&mute=1&autoplay=1"}
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
    </div>
  )
}

export default VideoBackground
