import React from 'react';
import Vector2 from '../assets/photo.png';
const GuideDetails = () => {
    return (
        <div>
            <div className='w-[960px] left-[350px] bg-white rounded-[8px] border-[1px] absolute mt-[10px]'>
                <div className='flex  justify-end'>
                    <div className='mr-auto flex m-5 '>
                        <img src={Vector2} alt='' className='   h-[50px] ' />
                        <div className='ml-2'>
                            <label className='pt-3  font-Poppins font-medium  '> To Cruise</label>
                            <p className='  font-Poppins text-sm text-gray-400  '>Uploaded 1hr ago</p>
                        </div>
                    </div>
                    <a  className='pt-3 font-Poppins font-medium m-5 '>View All</a>
                </div>
                <div className='w-[750px] m-5 font-Poppins'>
                    From Pioneers to Private Mega-Yachts: A Half-Day Tour through
                    126 YearsFrom Pioneers to Private Mega-Yachts: A Half-Day Tou
                    r through 126 YearsFrom Pioneers to Private Mega-Yachts:
                    A Half-Day Tour through 126 YearsFrom Pioneers to Private
                    Mega-Yachts: A Half-Day Tour through 126 Years
                </div>
            </div>
        </div>

    );
}

export default GuideDetails;
