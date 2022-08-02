import React, { useState } from 'react'
import pf from '../assets/pf.jpg';
import Navbar from './Navbar';
import Pmodel from './Pmodel';


function Settings() {
  const [open, setopen] = useState(false)


  return (
    <>    <div className="flex space-x-9">
    <div className='bg-[#363740]'><Navbar/></div>

      <div className=' rounded-[8px]  font-Poppins bg-white w-[850px] h-[380px] mt-10
 '>
        <div className='flex'>
          <p className='m-8 text-2xl  font-bold  '>Admin Profile</p>

        </div>
        <div className=''>
          <div className='flex justify-end mr-5'>
            <button type="button" class=" text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 " onClick={() => { setopen(true) }} >Edit Profile</button>
            {open && <Pmodel
              close={setopen}
            />}
          </div>
          <div className='flex ml-7'>
            <img class="w-[200px] h-[200px] m-2   rounded-full" src={pf} alt="img" />
            <div className='flex flex-col text-xl font-medium justify-evenly '>

              <label className='text-[#6d6a6a]'> <label className='  text-black '>Name: </label>Emma Watson</label>
              <label className='text-[#6d6a6a]'> <label className=' text-black'>Email: </label>emma@gmail.com</label>
              <label className='text-[#6d6a6a]'>  <label className=' text-black'>Address: </label>7485 Second Rd.Powder Springs, GA 30127</label>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  )
}

export default Settings