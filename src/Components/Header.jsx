import React from 'react'
import Vector from '../assets/search.png';
import Vector1 from '../assets/new.png';
import Vector2 from '../assets/photo.png';
import Vector3 from '../assets/divider.png';


function Header() {
    console.log('current URL ', window.location.href);
    console.log('current Pathname ', window.location.pathname);
    let text=''
    if(window.location.pathname ==='/'){
        text='Overview'
    } 
    if(window.location.pathname ==='/Orders'){
        text='Orders'
    } 
    
    if(window.location.pathname ==='/Guides'){
        text='Guides'
    } 
    if(window.location.pathname ==='/Travellers'){
        text='Travellers'
    } 
    if(window.location.pathname ==='/Details'){
        text='Details'
    } 

  
    return (
        <div>
            <div className='flex ml-5 pt-[50px]  '>
                <label className='text-3xl font-bold font-Poppins '>{text}</label>
<div className='flex w-[100%] justify-end pr-10 space-x-9 '>
                    <img src={Vector} alt='' className=' mt-4  h-[22px]' />
                    <img src={Vector1} alt='' className=' mt-4 h-[22px]' />
                    <img src={Vector3} alt='' className=' mt-2 h-[35px] w-[2px]' />
                    <label className='pt-3 font-Poppins font-medium  '>Jones Ferdinand</label>
                    <img src={Vector2} alt='' className='   h-[50px] ' />
                </div>
            </div>
            </div>

    )
}

export default Header