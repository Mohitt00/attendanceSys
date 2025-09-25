import React from "react";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";



function Home() {
  return (
    <div className="m-3 ml-4 rounded-2xl" id="mainBg">
      <div className="mb-3 flex justify-between items-center p-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold pl-5 w-[50%]">
          Smart <br /> Geofencing <br /> for Farms
        </h1>

       <div className="pr-5 w-[50%]">
         <img src={p1} className="h-30 w-50 sm:h-50 sm:w-70 lg:h-70 lg:w-130 rounded-2xl"/>
       </div>
      </div>

      <div className="mb-10 flex justify-between items-center gap-5">
        <div className="pl-5 w-[50%]">
          <img src={p2} className="h-30 w-50 sm:h-50 sm:w-70 lg:h-70 lg:w-130 rounded-2xl"/>
        </div>
        <div className="w-[50%] sm:w-90 lg:w-110 sm:text-xl lg:text-2xl">
         <p className="mb-3">
          Automatic,accurate, and secure <br />
          student attendance tracking.
        </p>
        <button className="bg-[#2f7bb5] p-1 rounded cursor-pointer">
         Get Started
        </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold ml-5 sm:text-3xl">Features</h1>
      <div className="w-full flex items-center justify-center flex-wrap wrap">
        <div className="flex items-center border p-5 gap-5 rounded m-2 w-full sm:w-[47%] contain-size h-17">
          <i className="fa-solid fa-bullseye text-4xl text-[#2f7bb5]"></i>
           <p>Geofence-based Attendance</p>
        </div>
          

        <div className="flex items-center border  p-5 gap-5 rounded m-2 w-full sm:w-[47%] contain-size h-17">
            <i className="fa-solid fa-chart-simple text-4xl text-[#2f7bb5]"></i>
           <p>Real-time Student Logs</p>
        </div>

        <div className="flex items-center border p-5 gap-5 rounded m-2 w-full sm:w-[47%] contain-size h-17">
            <span className="material-symbols-outlined text-[#2f7bb5]">finance_mode</span>   
          <p>Teacher Dashboard & Analytics</p>
        </div>

        <div className="flex items-center border p-5 gap-5 rounded m-2 w-full sm:w-[47%] contain-size h-17">
            <i className="fa-solid fa-shield-halved text-4xl text-[#2f7bb5]"></i>
          <p>Secure & Scalable</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
