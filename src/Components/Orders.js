import React from 'react';
import OrderCard from './OrderCard';
import Vector2 from '../assets/photo.png';

const AdminCard = () => {
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
        <div className=' mt-5 ml-[350px] mx-12  bg-white h-[500px]'>
            <div className=''>
            <div className='flex  justify-end'>
                <div className='mr-auto flex m-5 '>
                <img src={Vector2} alt='' className='   h-[50px] ' />
                <label className='pt-3  font-Poppins font-medium  '>Jones Ferdinand</label>
                </div>
                
                <label className='pt-3 font-Poppins font-medium m-5 '>View Guide Profile</label>
                </div>
            </div>
            <div className='mt-2  py-5 flex justify-evenly   items-center'>

                <div className='flex justify-center space-x-20'>
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
            </div>
            <div className='flex  justify-end mt-[50px]'>
                <div className='mr-auto flex flex-col  m-5 '>
  
                <label className='pt-3  font-Poppins font-medium  text-blue-600 '>Tom Cruise</label>
                <label className='pt-1  font-Poppins font-medium text-gray-500  text-xs'>on 24.05.2022</label>
                </div>
                
                <label className='pt-3 font-Poppins font-medium m-5 '>May 26,2022</label>
                </div>
        </div>
    );
}

export default AdminCard;
