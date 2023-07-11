import React from 'react'
import "../Login.css"
import { Logindataset } from '../Logindataset';
import { useState } from 'react'
export default function Login() {



  // console.log(Logindataset);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(email);
    // const [newEntry,setNewEntry]=useState([]);
    const submitform = (e)=>{
        e.preventDefault(); 
        const newEntry = {email:email,password:password}
        console.log(newEntry);
        Logindataset.map((obj)=>{
          if((obj.email==newEntry.email)&&(obj.password==obj.password)){
            alert("Login Successful");
          }
        }
        )
    }
  return (
      <div className='loginform'>
        <h1 class="title">FindEmp</h1>
        <div className='login-card'>

        <form action='' onSubmit={submitform}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete='off'/>
            </div>
            <div class="buttons">
              <a href="#" class="register-link">Register</a>
                <button type="submit" class="login-button">Login</button>
            </div>
        </form>
        <div className='demo-login'>
          <h1>Demo ID   : kaustwick0@theglobeandmail.com</h1>
          <h1>Demo passowrd   : jV0='0ki2Fc</h1>
        </div>
        </div>
    </div>
  )
}
