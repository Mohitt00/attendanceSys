import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function FarmerSignup() { 
  let navigate = useNavigate();

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState("");
  let [password,setPassword] = useState("");

  function ToggelLogin(){
   navigate("/farmerLogin");
  }
  
  function handleFarmerData(e){
      e.preventDefault();
       if(name){
        axios.post("http://localhost:5003/farmer-signup",{name,email,phone,password})
         .then((res)=>{
           if(res.data.success){
             setName("");
             setEmail("");
             setPhone("");
             setPassword("");
             alert(res.data.message);
             navigate("/farmerDash");
            }
          })
          .catch((err)=>{
            console.log(err);
          }) 
        } 
     
  }


  return (
    <div id='farmer' className='flex justify-center'>
      
      <form onSubmit={handleFarmerData} className='border-2 rounded-xl w-[60%] sm:w-[50%] h-100 flex items-center justify-center gap-8 flex-col' >
      <h1 className='text-xl font-semibold'>Farmer Signup</h1>
      <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} value={name}/>
      <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input type="number" placeholder='enter phone no' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
      <input type="password" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button className='font-semibold border bg-blue-400 w-[60%] rounded cursor-pointer active:bg-blue-500'>Signup</button>

        <p>
           If you have account? <span onClick={ToggelLogin} className='cursor-pointer '>Login</span>
        </p>
      
      </form>
    </div>
  )
}

export default FarmerSignup