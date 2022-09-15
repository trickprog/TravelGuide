import React, { useState, useEffect } from 'react'
import Order_display from './Order_display'
import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import arrow1 from '../assets/arrw1.png';
import arrow2 from '../assets/arrw2.png';
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from './Header'
function Order_placed() {

    const Orders = [
        {
            id: 1,
            Guide: 'Jason Crejza',
            Traveller: 'Matt Damon',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'1',
            ondate:'24.05.2022',
            Time:'6:30 PM'

        },
        {
            id: 1,
            Guide: 'Emily Watson',
            Traveller: 'Tom Cruise',
            Date: 'May 26,2022',
            Profit: 'LOW',
            img:'5',
            ondate:'24.05.2022',
            Time:'6:30 PM'

        },
        {
            id: 1,
            Guide: 'Sarah Taylor',
            Traveller: 'Robert Dow',
            Date: 'May 26,2022',
            Profit: 'NORMAL',
            img:'6',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Jeff Kim ',
            Traveller: 'Henry Cavil',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'2',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Steve Shaprio',
            Traveller: 'Chris Evans',
            Date: 'May 26,2022',
            Profit: 'LOW',
            img:'3',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Robert Downey',
            Traveller: 'Tom Cruise',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'4',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
    ]
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://ttravel-guideback.herokuapp.com/admin/order')
        .then(res => {

            setPosts(res.data);
            console.log("sca",res.data.length)
            

        }).catch(error=>{

            console.log(error)
            if(error.message=="Request failed with status code 401"){
                navigate('/')
            }
        })
    }, []);
    return (
        <div className='flex   '>
        <div className='bg-[#363740]'>
        <Navbar /> </div>
        <div className='w-full '>
        <Header />
        <div className='flex flex-col mx-14'>
        <div className='w-full  bg-white rounded-[8px] border-[1px]  mt-[10px]'>
            <div className='flex'>
                <p className='w-[200px] font-Poppins m-10 text-2xl font-semibold  '>All Orders</p>
                <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins text-[#4B506D] font-medium space-x-5'>
                    <img src={Vector} alt='' className=' w-[17px] h-[14px] mt-[5px] ' />
                    <label>Sort</label>
                    <img src={Vector1} alt='' className=' w-[14px] h-[14px] mt-[5px] ' />
                    <label>Filter</label>
                </div>



            </div>
            <div class="overflow-x-auto relative font-Poppins  -mt-10">
                            <table class="w-full text-sm text-left text-gray-500 ">
                                <thead class="text-lg text-colortxt uppercase bg-colornav ">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">
                                            Guide
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Traveller name
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Date
                                        </th>
                                        <th scope="col" class="py-3 px-4">
                                            Profit
                                        </th>
                                        <th scope="col" class="py-3 ">
                                            Details
                                        </th>
                                    </tr>
                                </thead>

                                {

                                    Orders.map((val, id) => {
                                        const a=val.img
                                        return <Order_display
                                        key={id}
                                        guide={val.Guide}
                                        Traveller={val.Traveller}
                                        Profit={val.Profit}
                                        Date={val.Date}
                                        img= {require('./profile/img'+a+'.png')}
                                        ondate={val.ondate}
                                        Time={val.Time}
                                        />
                                    })
                                }



                            </table>

                        </div>
            <div className='flex mb-7'>
                <div className='flex justify-end w-[90%] text-[#9FA2B4] space-x-40'>
                <label>Rows per page 8</label>
                <label >1-8 of 1240</label>

                </div>
                <img src={arrow1} alt='' className='  ' />
            <img src={arrow2} alt='' className='  ' />
            </div>


        </div>
        </div></div></div>
    )
}

export default Order_placed