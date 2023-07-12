import React, { useState, useEffect, useRef } from 'react'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

function Row({ url }) {

    const [ movies, setMovies ] = useState([])
    const [ trailerUrl, setTrailerUrl ] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original"
  const apiKey = "6e5834b60232414fc17c29353d035fed"

  const opts = {
    height: "320",
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
            setMovies(result.results)
        })
        .catch(err => console.log(err))

    }

    useEffect(()=>{
        const unsubscribe = getMovies()
        return unsubscribe;
    }, [])


  return (
    <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
       
        {movies.map((movie)=>{
            return (
            <>
             <img onClick={()=> handleClick(movie?.title || movie?.original_name || movie?.name)} src={`${base_url}${movie.poster_path}?api_key=${apiKey}`} className="object-contain w-[100%] max-h-[250px] m-2 hover:scale-125 transition-all duration-150 ease-out" />
            </>
            )
        })}
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

export default Row
