import React from 'react';

const GraphInfo = (props) => {
    return (
        <div>
            <div className='mx-2'>
                <p className='text-center mb-3 font-medium font-Poppins  text-[#9FA2B4] '>{props.title}</p>
                <h5 className=' text-center mb-2 text-3xl font-bold tracking-tight   text-gray-900'>{props.data}</h5>
            </div>
            <hr className='w-full bg-gray-600'/>
        </div>
    );
}

export default GraphInfo;
