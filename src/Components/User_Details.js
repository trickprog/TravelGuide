import React from 'react'
import pf from '../assets/pf.jpg';
import Navbar from './Navbar';


function User_Details(props) {
  return (
    <>
    <div className="flex space-x-9">
        <div className='bg-[#585269]'><Navbar/></div>
    
             <div className=' rounded-[8px] bg-white w-[850px] h-[380px] mt-10  '>
            <div className='flex'>
                <p className='font-Poppins m-10 text-2xl font-medium  '>User Details</p>

            </div>
            <div className='flex ml-10'>
                <img class="w-[200px] h-[200px] rounded-full" src={pf} alt="img" />
                <div className='flex flex-col ml-5 text-xl font-medium font-Poppins justify-evenly'>
                    <label className='text-[#6d6a6a]'> <label   className='  text-black '>Name: </label>Jason Crejza</label>
                    <label className='text-[#6d6a6a]'>  <label className=' text-black'>Username: </label>Jason Crejza</label>
                    <label className='text-[#6d6a6a]'>  <label className=' text-black'>Date of Birth: </label>29-10-1987</label>
                    <label className='text-[#6d6a6a]'> <label className=' text-black'>Gender: </label>Male</label>
                    <label className='text-[#6d6a6a]'>  <label className=' text-black'>Address: </label>7485 Second Rd.Powder Springs, GA 30127</label>
                    <label className='text-[#6d6a6a]'> <label className=' text-black'>Email: </label>123@gmail.com</label>
                </div>
            </div>




        </div>
        </div>
    </>
  )
}

export default User_Details