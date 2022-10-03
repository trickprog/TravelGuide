import React, { useState, useEffect } from 'react';
import GuideCard from './GuideCard';
import axios from 'axios'
import Pagination from './Pagination';
import Navbar from './Navbar'
import Header from './Header'
import { useNavigate } from "react-router-dom";
const Traveller = () => {




    const [posts, setPosts] = useState([]);
    const [search, setsearch] = useState("");
    const navigate = useNavigate();

    //Data is fetching and seting it Equal to setPosts State
    useEffect(() => {
        // getdata();
        console.log(search);
        getdata();
      }, [search]);
      const getdata = () => {
        axios
          .get(`https://backendtravelguide.herokuapp.com/admin/traveler?q=${search}`)
          .then((res) => {
            setPosts(res.data);
            console.log("sca", res.data);
          })
          .catch((error) => {
            console.log(error);
            if (error.message == "Request failed with status code 401") {
              navigate("/");
            }
          });
      };



    return (
        <div className='flex   '>
        <div className='bg-[#363740]'>
        <Navbar /> </div>
        <div className='w-full '>
        <Header />
        <div className='flex flex-col mx-10'>
        <div className='w-full bg-white rounded-[8px] border-[1px]  ml-6 mt-[10px]'>
                    <div className=''>
                    <div className="m-5">
                  <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    type="text"
                    class="bg-gray-200  text-gray-900 text-sm rounded-lg  block w-3/4 p-2.5 "
                    placeholder="Search"
                    required
                  />
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
                                            Name={val.userName}
                                            Location={val.city}
                                            Email={val.email}
                                            img={val.profileImage}
                                            //Joined={val.Joined}
                                            uid={val.UserId}
                                            Status={val.Status}
                                            documents={val.documents}
                                        />
                                    })
                                }



                            </table>

                        </div>

                    </div>




                </div>

            </div>
        </div></div>
    );
}

export default Traveller;
