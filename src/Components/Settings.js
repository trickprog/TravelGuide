import React, { useState } from 'react'
import pf from '../assets/pf.jpg';
import Pmodel from './Pmodel';


function Settings() {
  const [open, setopen] = useState(false)
  

  return (
    <div>

         <div className='w-[1150px] bg-white rounded-[8px] border-[1px] absolute top-20 ml-[60px]  font-Poppins
 '>
            <div className='flex'>
                <p className='w-[300px] m-10 text-2xl font-medium  '>Admin Profile</p>

            </div>
            <div className=' w-[100%] h-[300px] bg-white '>
            <button  type="button" class="text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 absolute right-10 top-20" onClick={()=>{setopen(true)}} >Edit Profile</button>
            {open && <Pmodel
                            close={setopen}
                            />}    
            {/* <img class="w-[200px] h-[200px] absolute -mt-4 ml-10 rounded-full" src={pf} alt="Neil image" /> */}
                <div className='flex flex-col ml-[280px] text-xl font-medium  gap-8 '>
                    
                    <label className='text-[#6d6a6a]'> <label   className='  text-black mt-10'>Name: </label>Emma Watson</label>
                    <label className='text-[#6d6a6a]'> <label className=' text-black'>Email: </label>emma@gmail.com</label>
                    <label className='text-[#6d6a6a]'>  <label className=' text-black'>Address: </label>7485 Second Rd.Powder Springs, GA 30127</label>
                </div>
            </div>
 
    </div>

    
   
    </div>
  )
}

export default Settings