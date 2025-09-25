import React from 'react'
import Navbar from './Navbar'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import FarmerLogin from './FarmerLogin';
import FarmerDashboard from './FarmerDashboard';
import FarmerSignup from './FarmerSignup';
import AddFarm from './AddFarm';
import ViewFarm from './ViewFarm';
import AddDriver from './AddDriver';
import DriverTable from './DriverTable';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/farmerLogin' element={<FarmerLogin/>}/>
        <Route path='/farmerSignup' element={<FarmerSignup/>}/>
        <Route path='/farmerDash' element={<FarmerDashboard/>}/>
        <Route path='/addFarm' element={<AddFarm/>}/>
        <Route path='/viewFarm' element={<ViewFarm/>}/>
        <Route path='/addDriver' element={<AddDriver/>}/>
        <Route path='/showDriver' element={<DriverTable/>}/>
      </Routes>
    </div>
  )
}

export default App