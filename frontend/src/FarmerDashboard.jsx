import React from 'react'
import { useNavigate } from 'react-router-dom'
import p3 from "./assets/p3.png";

function FarmerDashboard() {
  let navigate = useNavigate();

  function AddFarm(){
    navigate("/addFarm")
  }

  function showFarms(){
    navigate("/viewFarm");
  }

  function showDriverForm(){
    navigate("/addDriver");
  }

  function showDriverData(){
    navigate("/showDriver");
  }

  return (
    <div className='flex items-center justify-center flex-col gap-10 p-10'>
      <h1 className='text-2xl font-semibold'>Farmer Dashboard</h1> 
      <div className='flex gap-10'>
        <button onClick={showFarms}  className="bg-[#0cab3e] p-1 rounded cursor-pointer text-white">View Your Farms</button>
      <button onClick={showDriverData}  className="bg-[#c53a66] p-1 rounded cursor-pointer text-white">View Driver_Info</button>

      </div>
      <div className='flex gap-5 items-center justify-center w-full h-full'>
      <button onClick={AddFarm}  className="bg-[#2f7bb5] p-1 rounded cursor-pointer text-white">Add Farm</button>
      <button  className="bg-[#2f7bb5] p-1 rounded cursor-pointer text-white" onClick={showDriverForm}>Add Driver</button>
      <button  className="bg-[#2f7bb5] p-1 rounded cursor-pointer text-white">Refresh Dashboard</button>
      </div>
      <div className='h-[40%] w-[60%]'>
      <img src={p3} className='rotate-90 rounded-2xl'/>
      </div>
    </div>
  )
}

export default FarmerDashboard