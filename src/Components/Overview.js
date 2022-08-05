import React from 'react';
import AdminGraph from './AdminGraph';
import Cardlist from './CardList';
import Bcards from './Bcards';
import Navbar from './Navbar'
import Header from './Header'
const Overview = () => {
    return (
        <div className='flex   '>
        <div className='bg-[#363740]'>
        <Navbar /> </div>
        <div className='w-full '>
        <Header />
           
                <Cardlist/>
        
     
                <AdminGraph/>
   
            <div className='flex w-full justify-center'>
                <Bcards/>
            </div>

        </div>
        </div>
    );
}

export default Overview;
