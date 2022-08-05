import React from 'react'

export default function OrderCard(props) {
  return (
    <div>
        <div className='p-6 w-[258px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-center  group-hover:text-red-400 text-gray-900'>{props.title}</h5>
                <p className='mb-3 font-normal font-Poppins text-center text-gray-700  group-hover:text-red-400 dark:text-gray-400'>{props.data}</p>
            </div>
    </div>
  )
}

