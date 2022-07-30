import React from 'react'
import pf from '../assets/pf.jpg';


function User_Details(props) {
  return (
    <div>
             <div className='w-[1150px] bg-white rounded-[8px] border-[1px] absolute top-20 ml-[60px] '>
            <div className='flex'>
                <p className='w-[300px] font-Poppins m-10 text-2xl font-medium  '>User Details</p>

            </div>
            <div className=' w-[100%] h-[300px] bg-white '>
                <img class="w-[200px] h-[200px] absolute -mt-2 ml-10 rounded-full" src={pf} alt="Neil image" />
                <div className='flex flex-col ml-[280px] text-xl font-medium font-Poppins  gap-4 '>
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
  )
}

export default User_Details