import axios from 'axios';
import React, { useState } from 'react'
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function AddFarm() {
   let navigate = useNavigate();
    let [ownerId,setOwnerId] = useState("");
    let [name,setName] = useState("");
    let [address,setAddress] = useState("");
    let [lat,setLat] = useState("");
    let [log,setLog] = useState("");
    let [radius,setRadius] = useState("");

useEffect(()=>{
    let farmer_id = localStorage.getItem("farmer_Id");
    if(farmer_id){
      setOwnerId(farmer_id)
    }
},[])

    function handleFarmData(e){
      e.preventDefault();
      if(ownerId){
        axios.post("http://localhost:5003/addFarm",{ownerId,name,address,lat,log,radius})
        .then((res)=>{
          if(res.data.success){
            alert(res.data.message);
             navigate("/viewFarm");

          }
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      setOwnerId("");
      setName("");
      setAddress("");
      setLat("");
      setLog("");
      setRadius("");
    }


  return (
    <div className='flex flex-col items-center justify-center gap-6  w-full'>
        <h1 className='text-2xl font-semibold'>Add Farm</h1>
        <form onSubmit={handleFarmData} className='flex flex-col border rounded bg-blue-50 p-10 items-center justify-center gap-5  w-[50%]'>
            <p>Owner_id: {ownerId}</p> 
            <input className='border rounded px-3 w-[100%] sm:w-[60%] ' type="text" placeholder='enter farm name'  onChange={(e)=>setName(e.target.value)}  value={name} />
            <input className='border rounded px-3 w-[100%] sm:w-[60%] ' type="text" placeholder='enter farm address'  onChange={(e)=>setAddress(e.target.value)}  value={address}/>
            <input className='border rounded px-3 w-[100%] sm:w-[60%] ' type="number" placeholder='centeroid_lat' onChange={(e)=>setLat(e.target.value)}  value={lat} />
            <input className='border rounded px-3 w-[100%] sm:w-[60%] ' type="number" placeholder='centeroid_log' onChange={(e)=>setLog(e.target.value)}  value={log} />
            <input className='border rounded px-3 w-[100%] sm:w-[60%] ' type="number" placeholder='enter radius' onChange={(e)=>setRadius(e.target.value)}  value={radius} />
            <button className='border rounded px-3 bg-blue-400 w-[100%] sm:w-[60%] cursor-pointer active:bg-blue-500'>Add Farm</button>
        </form>
    </div>
  )
}

export default AddFarm