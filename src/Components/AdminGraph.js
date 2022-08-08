import React, { useState, useEffect } from 'react';
import img from '../assets/graph.png';

import GraphInfo from './GraphInfo';
const AdminGraph = () => {

    const [time, settime] = useState(new Date())

    useEffect(() => {
        setInterval(() => settime(new Date()), 1000);
    }, []);

        let hh = time.getHours()
        let mm = time.getMinutes()
        let ss = time.getSeconds()
       let currenttime= `${hh} : ${mm} : ${ss}`

    const Card_data = [
        {
            id: 1,
            title: 'Total Orders',
            data: '$21,360'

        },
        {
            id: 2,
            title: 'Average Location Distance',
            data: '25km'

        },
        {
            id: 3,
            title: 'Average first response time',
            data: '33m'

        },
        {
            id: 4,
            title: 'Average response time',
            data: '3h 8m'

        },
    ]
    return (
        <div className=' mt-5 mx-10'>
            <div className='mt-2  pl-5 py-5 flex justify-evenly items-center bg-white'>
                <div>
                    <div className=''>
                        <h5 className=' mb-2 text-2xl font-bold tracking-tight   text-gray-900'>Today’s trends</h5>
                        <p className=' mb-3 font-normal font-Poppins  text-gray-700'>as of {currenttime} </p>
                    </div>
                    <img src={img} className='' alt="Graph" />
                </div>
                <div>
                    <hr class="ml-0.5 w-0.5 border h-[450px] bg-gray-600" />
                </div>
                <div className=''>

                    {
                        Card_data.map((val, id) => {

                            return <GraphInfo
                                key={id}
                                title={val.title}
                                data={val.data}
                            />
                        })
                    }
                </div>
            </div>

        </div>

    );
}

export default AdminGraph;
