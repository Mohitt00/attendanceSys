import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DriverTable() {
    let  navigate = useNavigate();
    let [driverData,setDriverData] = useState([]);

    useEffect(()=>{
       axios.get("http://localhost:5003/showDriver")
       .then((res)=>{
        if(res.data.success){
            setDriverData(res.data.driverData);
        }
       })
    },[])    

    function handleBack(){
    navigate("/farmerDash");
  }

  return (
    <div className='flex flex-col items-center w-full h-full gap-10'>
      <h1 className='text-2xl font-semibold bg-[#f5e2f6]  w-[100%] text-center'>All Driver's Data</h1>
         <button onClick={handleBack} className='cursor-pointer border bg-[#a28089] active:bg-[#82636b] px-2 font-semibold rounded'>--Back</button>

        <div>
            {driverData.length>0 ? 
            <table>
                <thead className='border'>
                    <tr>
                        <th className='border px-2'>Id</th>
                        <th className='border px-2'>Name</th>
                        <th className='border px-2'>Email</th>
                        <th className='border px-2'>Phone</th>
                        <th className='border px-2'>Vehical_no</th>
                        <th className='border px-2'>Created_at</th>
                    </tr>
                </thead>
                <tbody>
                    {driverData.map((items,indx)=>{
                        return <tr key={indx}>
                              <td className='border px-2'>{items.id}</td>
                              <td className='border px-2'>{items.name}</td>
                              <td className='border px-2'>{items.email}</td>
                              <td className='border px-2'>{items.phone}</td>
                              <td className='border px-2'>{items.vehical_no}</td>
                              <td className='border px-2'>{items.created_at}</td>
                        </tr>
                    })}
                </tbody>
            </table>
              : <p>No driver found</p>  }
        </div>
    </div>
  )
}

export default DriverTable