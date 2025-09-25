import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddDriver() {
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState("");
    let [vehical,setVehical] = useState("");


    function handleDriverData(e){
      e.preventDefault();
      if(name){
        axios.post("http://localhost:5003/addDriver",{name,email,phone,vehical})
        .then((res)=>{
            if(res.data.success){
                setName("");
                setEmail("");
                setPhone("");
                setVehical("");
                alert(res.data.message);
                navigate("/farmerDash");
            }
        }).catch((err)=>{
            console.log(err);
        })
      }
      
    }

  return (
    <div  className='flex flex-col items-center justify-center gap-6  w-full'>
        <h1 className='text-2xl font-semibold'>Add Driver</h1>
        <form onSubmit={handleDriverData}  className='flex flex-col border rounded bg-blue-50 p-10 items-center justify-center gap-5  w-[50%]'>
            <input  className='border rounded px-3 w-[100%] sm:w-[60%] '  type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} value={name}/>
            <input className='border rounded px-3 w-[100%] sm:w-[60%] '  type="email" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className='border rounded px-3 w-[100%] sm:w-[60%] '  type="number" placeholder='enter Phone no' onChange={(e)=>setPhone(e.target.value)} value={phone} />
            <input  className='border rounded px-3 w-[100%] sm:w-[60%] ' type="text" placeholder='enter vehical no' onChange={(e)=>setVehical(e.target.value)} value={vehical} />
            <button className='border rounded px-3 bg-blue-400 w-[100%] sm:w-[60%] cursor-pointer active:bg-blue-500'>Add Driver</button>

        </form>
    </div>
  )
}

export default AddDriver