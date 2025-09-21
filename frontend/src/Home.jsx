import React from "react";
import school from "./assets/school.jpg";

function Home() {
  return (
    <div className="m-3 ml-4">
      <div className="mb-3 flex justify-between">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          Smart Geofence <br /> Attendance <br /> System for <br /> Schools
        </h1>
        <img
          src={school}
          className="h-40 w-60 sm:w-70 sm:h-50 lg:w-100 lg:h-80"
          alt="School"
        />
      </div>

      <div className="mb-10">
        <p className="mb-3">
          Automatic,accurate, and secure <br />
          student attendance tracking.
        </p>
        <button className="bg-[#2f7bb5] p-1 rounded cursor-pointer">
          Get Started
        </button>
      </div>

      <h1 className="text-2xl font-semibold">Features</h1>
      <div className="w-full flex items-center justify-center flex-wrap wrap">
        <div className="flex items-center border w-[45%] p-5 gap-5 rounded m-2">
          <i class="fa-solid fa-bullseye text-4xl text-[#2f7bb5]"></i>
          <p>Geofence-based Attendance</p>
        </div>

        <div className="flex items-center border w-[45%] p-5 gap-5 rounded m-2">
            <i class="fa-solid fa-chart-simple text-4xl text-[#2f7bb5]"></i>
          <p>Real-time Student Logs</p>
        </div>

        <div className="flex items-center border w-[45%] p-5 gap-5 rounded m-2">
            <span class="material-symbols-outlined text-[#2f7bb5]">finance_mode</span>   
          <p>Teacher Dashboard & Analytics</p>
        </div>

        <div className="flex items-center border w-[45%] p-5 gap-5 rounded m-2">
            <i class="fa-solid fa-shield-halved text-4xl text-[#2f7bb5]"></i>
          <p>Secure & Scalable</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
