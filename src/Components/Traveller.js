import React, { useState, useEffect } from 'react';
import GuideCard from './GuideCard';
import axios from 'axios'
import Pagination from './Pagination';
import Navbar from './Navbar'
import Header from './Header'
import { useNavigate } from "react-router-dom";
const Traveller = () => {



    const [CurrentPage, setCurrentPage] = useState(1);
    const PostPerPage = 4
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    //Data is fetching and seting it Equal to setPosts State
    useEffect(() => {
        axios.get('https://ttravel-guideback.herokuapp.com/admin/traveler')
            .then(res => {

                setPosts(res.data);
                console.log("sca", res)


            }).catch(error => {

                console.log(error)
                if (error.message == "Request failed with status code 401") {
                    navigate('/')
                }
            })
    }, [])

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
                        <div class="overflow-x-auto relative font-Poppins ">
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

                                    posts.map((val, id) => {

                                        return <GuideCard
                                            key={id}
                                            Name={val.Status.userName}
                                            Location={val.Status.city}
                                            Email={val.Status.email}
                                            img={val.Status.profileImage}
                                            //Joined={val.Joined}
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
        </div></div>
    );
}

export default Traveller;
