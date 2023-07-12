import { useState, useEffect, useRef } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav"
import Row from "../components/row"
import Banner from "../components/banner"

export default function Home() {

  const [ open, setOpen ] = useState(false)
  const apiKey = "6e5834b60232414fc17c29353d035fed"
  const base_url = "https://api.themoviedb.org/3"


  return (
    <div className="flex flex-col w-screen h-full no-scrollbar">
      <Nav isOpen={open} open={()=> setOpen(true)} close={()=> setOpen(false)} />
      <Banner />
      <div className="flex flex-col justify-evenly m-2 no-scrollbar">
      <h1 className="text-xl font-bold text-white">NETFLIX ORIGINALS </h1>
        <Row url={`${base_url}/trending/all/week?api_key=${apiKey}&with_networks=213`} />
        <h1 className="text-xl font-bold text-white">TRENDING</h1>
        <Row url={`${base_url}/discover/tv?api_key=${apiKey}&language=en-US`} />
        
        <h1 className="text-xl font-bold text-white">TOP RATED</h1>
        <Row url={`${base_url}/movie/top_rated?api_key=${apiKey}&language=en-US`} />
        
        <h1 className="text-xl font-bold text-white">ACTION</h1>
        <Row url={`${base_url}/discover/movie?api_key=${apiKey}&with_genres=28`} />
        <h1 className="text-xl font-bold text-white">COMEDY</h1>
        <Row url={`${base_url}/discover/movie?api_key=${apiKey}&with_genres=35`} />
        <h1 className="text-xl font-bold text-white">ROMANCE</h1>
        <Row url={`${base_url}/discover/movie?api_key=${apiKey}&with_genres=27`} />

      
      
      
      </div>

    </div>
  )
}
