import React from 'react';
import OrderCard from './OrderCard';
import pf from '../assets/photo2.png';
import Navbar from './Navbar';
import Header from './Header';

const Orderdet = () => {
    const Card_data = [
        {
            id: 1,
            title: 'Order Amount',
            data: '$21,360'

        },
        {
            id: 2,
            title: 'Admin Shares',
            data: '$21,360'

        },
        {
            id: 3,
            title: 'Guide',
            data: '$21,360'

        },
        {
            id: 4,
            title: 'On hold',
            data: '$21,360'

        },
    ]
    return (
        <div className='flex '>
        <div className='bg-[#363740]'>
        <Navbar /> </div>
        <div className='w-full '>
        <Header />
        <div className=' mt-5 mx-10  bg-white h-1/2'>
            <div className=''>
            <div className='flex  justify-end'>
                <div className='mr-auto flex m-5 '>
                <img src={pf} alt='' className='  w-[44px] h-[44px] rounded-full ' />
                <div className=' flex flex-col ml-5 '>
  
                <label className=' font-Poppins font-medium  text-black '>Jason Crejza</label>
                <label className=' font-Poppins font-medium text-gray-300  text-xs'>Updated 1 day ago</label>
                </div>
                </div>
                
                <label className='pt-3 font-Poppins font-medium m-5 '>View Guide Profile</label>
                </div>
            </div>


                <div className='flex justify-evenly '>
                    {
                        Card_data.map((val, id) => {
                            return <OrderCard
                                key={id}
                                title={val.title}
                                data={val.data}
                            />
                        })
                    }
                </div>
            <div className='flex  justify-end mt-[50px]'>
                <div className='mr-auto flex flex-col  m-5 '>
  
                <label className=' font-Poppins font-medium  text-blue-600 '>Tom Cruise</label>
                <label className='pt-1  font-Poppins font-medium text-gray-500  text-xs'>on 24.05.2022</label>
                </div>
                <div className=' flex flex-col  m-5 '>
  
                <label className=' font-Poppins font-medium  text-black '>May 26,2022</label>
                <label className='pt-1  font-Poppins font-medium text-gray-500  text-xs'>6:30 pm</label>
                </div></div>
        </div></div></div>
    );
}

export default Orderdet;
