
import { TextField } from '@mui/material';
import react,{useState,useRef,useEffect} from "react";
import styled from "styled-components";
import React from 'react';


import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Login() {
    const [strEmail,setEmail]=useState('');
    const [strPassword,setPassword]=useState('');
    const navigate = useNavigate();
  
    
    const clickfun= ()=>{
        axios.post('https://ttravel-guideback.herokuapp.com/admin/login', {
            password:strPassword,email:strEmail
          }).then(function (response){
            console.log('dcfsu')
            // console.log("response",response)
            navigate('./overview')
          })
          .catch(error=>{
            // console.log(error)
          })


    }
  return (
    <div className='flex justify-center mt-[150px]'>

    <div class="w-3/4 p-4 max-w-sm bg-white mr-0 rounded-lg border border-gray-200 shadow-lg shadow-gray-700 sm:p-6 lg:p-8 font-Poppins">
        <div class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900">Welcome To Admin Panel</h5>
            <div>
            <TextField  color='info' className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' id="outlined-basic" label="Email" variant="outlined" placeholder='Your Email' value={strEmail} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <TextField className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'  id="outlined-basic" label="Password" variant="outlined"type='password' value={strPassword} onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <div class="flex items-start">
                
                <a href="/" class=" text-md text-blue-700 hover:underline ">Doesn't have an account? </a>
            </div>
            <button type="submit" class="w-full text-white bg-[#44454b]  font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={clickfun}>Login to your account</button>
        </div>
    </div>


</div>

  )
}

export default Login