import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav className='m-3 flex justify-between p-2'>
    <div className='flex items-center ml-3 gap-2'>
        <i className='fa-solid fa-location-dot text-[#74C0FC] text-3xl'></i>
        <h3 className='font-semibold'>SMART ATTENDANCE</h3>
    </div>

    <div className='flex items-center gap-10 mr-5'>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
       <Link to={"/teacher"} className='bg-[#2f7bb5] p-1 rounded'>Teacher Login</Link>

    </div>
   </nav>
  )
}

export default Navbar