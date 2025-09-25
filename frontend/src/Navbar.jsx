import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate();
  function handleIcon(){
     alert("you want to access home page")
     navigate("/");
  }
  return (
   <nav className='m-3 flex justify-between p-2 shadow rounded-t-xl'>
    <div className='flex items-center ml-3 gap-2 '>
        <i className='fa-solid fa-location-dot text-[#74C0FC] text-3xl hover:text-[#2f7bb5] cursor-pointer' onClick={handleIcon}></i>
        <h3 className='font-semibold'>SMART FARMS</h3>
    </div>

    <div className='flex items-center gap-10 mr-5'>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/farmerSignup"} className='bg-[#2f7bb5] h-10 w-35 pl-3 p-2 rounded font-semibold hover:bg-[#4da0df] active:bg-[#2f7bb5]'>Get Your Access</Link>

    </div>
   </nav>
  )
}

export default Navbar