import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function FarmerLogin() {
  let navigate = useNavigate();
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  function handleFarmerLog(e){
    e.preventDefault();
    if(email){
      axios.post("http://localhost:5003/farmer-login",{email,password})
      .then((res)=>{
        if(res.data.success){
            setEmail("");
            setPassword(""); 
          localStorage.setItem("farmer_Id",res.data.farmer_id);   
          alert(res.data.message);
          navigate("/farmerDash");
        }
        else{
           setEmail("");
            setPassword(""); 
          alert(res.data.message);
        }
      })
      .catch((err)=>{
        console.log(err);   
      })
    }
  }

  function ToggelSignup(){
    navigate("/farmerSignup");
  }


  return (
    <div id='farmer' className='flex justify-center'>
      <form onSubmit={handleFarmerLog} className='border-2 rounded-xl w-[60%] sm:w-[50%] h-100 flex items-center justify-start gap-8 flex-col' >
      <h1 className='text-xl font-semibold pt-5 pb-15'>Farmer login</h1>
      <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input type="password" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button className='font-semibold border bg-blue-400 w-[60%] rounded cursor-pointer active:bg-blue-500'>Login</button>

      <p>If you have no account? <span onClick={ToggelSignup} className='cursor-pointer'>Signup</span> </p>
      </form>
    </div>
  )
}

export default FarmerLogin