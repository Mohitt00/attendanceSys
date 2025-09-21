import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  let navigate = useNavigate();
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  function handleTeachLog(){
      console.log(name,email,password);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/teacherDash");
  }
  return (
    <div>
      <form onSubmit={handleTeachLog}>
      <h1>Teacher login</h1>
      <input type="text" placeholder='enter your name'/>
      <input type="email" placeholder='enter your email' />
      <input type="password" placeholder='enter password' />
      <button>Login</button>
      </form>
    </div>
  )
}

export default TeacherLogin