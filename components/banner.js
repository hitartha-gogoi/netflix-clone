import React, { useState, useEffect, useRef } from 'react'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

function Banner() {

  const [ movie, setMovie ] = useState({})
  const [ trailerUrl, setTrailerUrl ] = useState("")


  const apiKey = "6e5834b60232414fc17c29353d035fed"
  const base_url = "https://api.themoviedb.org/3"
  const url = `${base_url}/trending/all/week?api_key=${apiKey}&language=en-US`

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (title)=>{
    if(trailerUrl){
      setTrailerUrl("")
    } else {
      movieTrailer(title)
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch(err =>{ 
        console.log(err)
        setTrailerUrl("")
        alert('Not Found!')
      })
    }
  }


  const getMovies = ()=>{
    fetch(url)
    .then(res =>{
        return res.json()
    })
    .then(result =>{ 
        console.log(result.results)
        setMovie(result.results[Math.floor(Math.random() * result.results.length)])
    })
    .catch(err => console.log(err))
}

useEffect(()=>{
    const unsubscribe = getMovies()
    return unsubscribe;
}, [])


  return (
    <div>
      <div className={`h-[340px] object-contain text-white flex`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`, backgroundSize: "cover", backgroundPosition: "center center"}}>
      <div />
      <div className="flex flex-col self-end justify-left ml-8">
      <span className="text-left text-5xl font-extrabold">{movie?.title || movie?.original_name || movie?.name} </span>
      <span className="text-left font-bold text-xs w-[360px]">{movie.overview}</span>
      <button onClick={()=> handleClick(movie?.title || movie?.original_name || movie?.name)} className="text-white text-center font-bold  bg-black opacity-75 h-8 w-28 rounded-sm m-4 hover:scale-125 transition-all ease-in-out duration-150">Play</button>

      </div>
      </div>
      {trailerUrl &&
        <div className="z-10 fixed left-0 top-[20%] w-screen h-[340px] bg-black">
          <div className="flex justify-between">
            <span /> <span className="text-white" onClick={()=> setTrailerUrl('')}>close</span>
          </div>
         <YouTube videoId={trailerUrl} opts={opts} />
        </div>}
    </div>
  )
}

export default Banner
