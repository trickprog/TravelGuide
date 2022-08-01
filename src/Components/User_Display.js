import React, { useState } from 'react'



function UserDisplay(props) {



    return (
        <div >


            <div className='text-black font-Poppins font-medium  h-[100px] mt-4'>

                

                <div className=''>
                    <div className='flex justify-evenly '>
                  <img class="w-[44px] h-[44px]  rounded-full" src={props.img} alt="Neil image" />
                  <a href='/User_details'>    <label className='' >{props.name}</label></a>
                        <label className=' flex flex-col'>{props.email}</label>
                        <label className=''>{props.last}</label>
                        <label className=''>{props.username}</label>
                        <div className=''>
                            <button type="button" class="text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Edit</button>

                            <button type="button" class="ml-[20px] text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Delete</button>

                        </div>

                    </div>

                </div>
                <hr className='mt-5' />

            </div>





        </div>


    )
}

export default UserDisplay