import React, { useState, useEffect } from 'react'


import GuideCard from './GuideCard';
import Pagination from './Pagination';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Header from './Header'
function Guide() {

    // const Orders = [
    //     {
    //         id: 1,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'InActive',
    //         img: '1',
    //     },
    //     {
    //         id: 2,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '2',
    //     },
    //     {
    //         id: 3,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '3',
    //     },
    //     {
    //         id: 4,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '4',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '5',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '5',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '5',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'InActive',
    //         img: '5',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '5',
    //     },
    //     {
    //         id: 5,
    //         Name: 'Jason Crejza',
    //         Location: 'Stockholm, Sweden',
    //         Joined: '2002',
    //         Email: 'abc@yahoo.com',
    //         Status: 'Active',
    //         img: '5',
    //     },

    // ]
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PostPerPage, setPostPerPage] = useState(4);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    //Data is fetching and seting it Equal to setPosts State
    useEffect(() => {
        axios.get('https://backendtravelguide.herokuapp.com/admin/guides')
        .then(res => {

            setPosts(res.data);
            console.log("sca",res.data)
            

        }).catch(error=>{

            console.log(error)
            if(error.message=="Request failed with status code 401"){
                navigate('/')
            }
        })
    }, []);

    //Data Showing on the page is limited to 4 Posts only 
    const indexOfLastPost = CurrentPage * PostPerPage;
    const indexOfFirstPost = indexOfLastPost - PostPerPage;
    const CurrentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // This is used for changing the page of posts 
     const paginate = pageNumber => setCurrentPage(pageNumber);

     // Defining the Total posts 
    let total = posts.length;

    // Filtering Out the Active Users in the Posts 
    let StatusActive = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].Status === 'Active') {
            StatusActive += 1;
        }
    }


    return (
        <div className='flex   '>
        <div className='bg-[#363740]'>
        <Navbar /> </div>
        <div className='w-full '>
        <Header />
        <div className='flex flex-col mx-10'>
        <div className='w-full bg-white rounded-[8px] border-[1px]  ml-6 mt-[10px]'>
            <div className=''>
                <div className='flex justify-end'>
    
                    <div className=' flex flex-col items-end mt-8 mr-14 font-Poppins text-[#4B506D] font-medium '>
                        <div>
                            <label>Total: </label>
                            <label>{total}</label>
                        </div>
                        <div>
                            <label>Current Active: </label>
                            <label>{StatusActive}</label>
                        </div>
                    </div>




                </div>
                <div class="overflow-x-auto relative font-Poppins  ">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-lg text-colortxt uppercase bg-colornav ">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Location
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Joined
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Details
                        </th>
                    </tr>
                </thead>
               
                {
                CurrentPosts.map((val, id) => {

                    
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <GuideCard
                    key={id}
                    Name={val.Status.userName}
                    Location={val.Status.city}
                    Email={val.Status.email}
                    img={val.Status.profileImage}
                    
                    Status={val.Status.Status}
                    />
                })
            }

           
</table>

        </div>
                
            </div>

          

                
                <Pagination
                PostPerPage={PostPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                />
                
            </div>


</div>
</div>
</div>

    )
}

export default Guide