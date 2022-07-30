import React ,{useState}from 'react'



function UserDisplay(props) {
    
  

    return (
        <div >
      

                <div  className='text-black font-Poppins font-medium w-[100%] h-[100px] mt-4'>
 
                <img class="w-[44px] h-[44px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image"/>
                    <label className='ml-24 absolute ' >{props.name}</label>
                    <div className='ml-[300px]'>
                <div className='flex  '>

                
                            <label className='w-[250px] flex flex-col'>{props.email}</label>
                            <label className='w-[170px]'>{props.last}</label>
                            <label className='w-[200px]'>{props.username}</label>
                            <div className='w-[200px]'>
                            <button  type="button" class="text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Edit</button>
                           
                            <button type="button" class="ml-[20px] text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Delete</button>

                            </div>
                           
                        </div>

                    </div>
                    <hr  className='mt-5'/>

                </div>





            </div>
      

    )
}

export default UserDisplay