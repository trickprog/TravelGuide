import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardList = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const Card_data=[
        {
            id:1,
            title:'Total',
            data:'$21,360'

        },
        {
            id:2,
            title:'Available',
            data:'$21,360'

        },
        {
            id:3,
            title:'Withdrawn',
            data:'$21,360'

        },

    ]

    useEffect(() => {
        axios
          .get("https://backendtravelguide.herokuapp.com/admin/Admin")
          .then((res) => {
            setPost(res.data);
            console.log("sca", res.data);
          })
          .catch((error) => {
            console.log(error);
            if (error.message == "Request failed with status code 401") {
              navigate("/");
            }
          });
      }, []);
console.log(post)
    return (
        <>{post.map((val,ind)=>
            <div key={ind} className='mt-10 flex justify-around'>
             <div className='p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 font-Poppins'>
                <h5 className='mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]'>Total Earning</h5>
                <p className='mb-3 font-medium text-3xl font-Poppins text-center text-black  group-hover:text-red-400 '>${val.totalEarning}</p>
            </div>
            <div className='p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 font-Poppins'>
                <h5 className='mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]'>Available</h5>
                <p className='mb-3 font-medium text-3xl font-Poppins text-center text-black  group-hover:text-red-400 '>${val.wallet}</p>
            </div>
            <div className='p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 font-Poppins'>
                <h5 className='mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]'>Withdrawn</h5>
                <p className='mb-3 font-medium text-3xl font-Poppins text-center text-black  group-hover:text-red-400 '>${val.withDraw}</p>
            </div>
        </div>
    )}
    </>
        
    );
}

export default CardList;
