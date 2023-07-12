import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { VscAccount } from "react-icons/vsc"
import Avatar from "@mui/material/Avatar"


function Header({ isOpen, open, close }) {


  const [ show, handleShow ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100){
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
  
    
  }, [])
  
  return (
    <div className={`flex flex-row justify-between items-center flex-wrap h-14 w-screen  fixed top-0 left-0 z-[1600] ${show ? 'bg-black': 'bg-transparent' }`}>
    <div className="flex">
  <Link href="/">
    <img className='h-8 w-24 ml-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png' />
  </Link>
    </div>
    <img className="h-8 w-8 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
    </div>
  )
}

export default Header
