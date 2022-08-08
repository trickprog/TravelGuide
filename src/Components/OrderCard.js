import React from 'react'

export default function OrderCard(props) {
  return (
    <div>
        <div className='p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 '>
                <h5 className='mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]'  >{props.title}</h5>
                <p className='mb-3 font-medium text-3xl font-Poppins text-center text-black  group-hover:text-red-400'>{props.data}</p>
            </div>
    </div>
  )
}

