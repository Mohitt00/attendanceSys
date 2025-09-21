import React from 'react'
import Navbar from './Navbar'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import TeacherLogin from './TeacherLogin';
import Home from './Home';
import TeacherDashboard from './TeacherDashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/teacher' element={<TeacherLogin/>}/>
        <Route path='/teacherDash' element={<TeacherDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App