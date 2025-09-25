import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ViewFarm() {
  let navigate = useNavigate();
  let [farmData,setFarmData] = useState([]);


  function handleBack(){
    navigate("/farmerDash");
  }
  
  useEffect(()=>{
  axios.get("http://localhost:5003/viewFarm")
  .then((res)=>{
    if(res.data.success){
      setFarmData(res.data.newFarmData);
    }
    else{
      alert(res.data.message);
    }
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  return (
    <div className='flex flex-col items-center w-full h-full gap-10'> 
      <h1 className='text-2xl font-semibold bg-[#e5eaf5]  w-[100%] text-center'>Farm's Data</h1>
         <button onClick={handleBack} className='cursor-pointer border bg-[#a28089] active:bg-[#82636b] px-2 font-semibold rounded'>--Back</button>
        <div>
            {
              farmData.length>0 ? 
              <table>
                   <thead className='border'>
                     <tr>
                      <th className='border px-2'>Id</th>
                      <th className='border px-2'>Owner_id</th>
                      <th className='border px-2'>Farm Name</th>
                      <th className='border px-2'>Farm Address</th>
                      <th className='border px-2'>Latitude</th>
                      <th className='border px-2'>Longitude</th>
                      <th className='border px-2'>Radius</th>
                     </tr>
                   </thead>
                   <tbody>
                    {farmData.map((items,indx)=>{
                      return <tr key={indx}>
                          <td className='border px-2'>{items.id}</td>
                          <td className='border px-2'>{items.owner_id}</td>
                          <td className='border px-2'>{items.name}</td>
                          <td className='border px-2'>{items.address}</td>
                          <td className='border px-2'>{items.centeroid_lat}</td>
                          <td className='border px-2'>{items.centeroid_log}</td>
                          <td className='border px-2'>{items.radius_m}</td>
                         </tr>
      }
    )}
                   </tbody>
               </table>
      
      : <p> No farms found</p>
            }
  
      </div>
    </div>
  )
}

export default ViewFarm