import React, { useState, useEffect } from "react";
import GuideCard from "./GuideCard";
import axios from "axios";
import Vector from "../assets/dots.png";

import Pagination from "./Pagination";
import Navbar from "./Navbar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Traveller = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const PostPerPage = 4;
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  //Data is fetching and seting it Equal to setPosts State
  useEffect(() => {
    axios
      .get("https://backendtravelguide.herokuapp.com/admin/approval")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.message == "Request failed with status code 401") {
          navigate("/");
        }
      });
  }, []);

  const aprroveUser = (uid) => {
    console.log(uid);
    const user={
      approval:true
    }
    axios
      .post(`https://backendtravelguide.herokuapp.com/admin/approval/${uid}`,user)
      .then((res) => {
        alert("User Approved");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  
  const rejectUser = (uid) => {
    console.log(uid);
    const user={
      reject:true
    }
    axios
      .post(`https://backendtravelguide.herokuapp.com/admin/reject/${uid}`,user)
      .then((res) => {
        alert("User Declined");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Data Showing on the page is limited to 4 Posts only
  const indexOfLastPost = CurrentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const CurrentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // This is used for changing the page of posts
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Defining the Total posts
  let total = posts.length;

  return (
    <div className="flex   ">
      <div className="bg-[#363740]">
        <Navbar />
      </div>
      <div className="w-full ">
        <Header />
        <div className="flex flex-col mx-10">
          <div className="w-full bg-white rounded-[8px] border-[1px]  ml-6 mt-[10px]">
            <div className="mt-5">
              <div class="overflow-x-auto relative font-Poppins ">
                <table class="w-full text-sm text-left text-gray-500 ">
                  <thead class="text-lg text-colortxt uppercase bg-colornav ">
                    <tr>
                      <th scope="col" class="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Docmuents
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {posts.map((val, ind) => (
                      <tr key={ind} class="bg-white border-b  font-medium text-black">
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium  whitespace-nowrap text-lg"
                        >
                          {val.userName}
                          <p className="text-gray-500 text-sm">{val.role}</p>
                        </th>

                        <td class="py-4 px-6"><a href={val.docmunets}>Download Document</a></td>

                        <td class="py-4 px-6">
                          <button
                          value={val.UserId}
                          onClick={(e)=>aprroveUser(e.target.value)}
                            type="button"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                          >
                            Approve
                          </button>
                          <button
                          value={val.UserId}
                          onClick={(e)=>rejectUser(e.target.value)}
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                          >
                            Decline
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
  );
};

export default Traveller;
