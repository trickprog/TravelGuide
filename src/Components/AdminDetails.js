import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Vector2 from "../assets/photo.png";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
function AdminDetails() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [model, setmodel] = useState(false);
  const [passw, setpassw] = useState(false);
  const [adminid, setadminid] = useState('');
  const [password, setpassword] = useState("password");
  const [txt, settxt] = useState("Show");
  const handleclick = () => {
    setmodel(!model);
  };
  const handleclick2 = () => {
    setpassw(!passw);
  };
  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      settxt("Hide");
    } else {
      setpassword("password");
      settxt("Show");
    }
  };
let adminUserId=''
  useEffect(() => {
    axios
      .get("https://backendtravelguide.herokuapp.com/admin/Admin")
      .then((res) => {
        setPost(res.data);
        console.log("sca", res.data);
        setadminid(res.data[0].UserId)
      })
      .catch((error) => {
        console.log(error);
        if (error.message == "Request failed with status code 401") {
          navigate("/");
        }
      });
  }, []);
const wallet=5000
const getwallet=(token)=>{

  axios.post(`http://localhost:8080/admin/admin/${adminid}`)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })


const body={
  token,
  Wallet:wallet
}
axios.post(`http://localhost:8080/admin/addWallet`,body)
.then((res)=>{
  console.log(res)
  window.location.reload(true)
})
.catch((err)=>{
  console.log(err)
})
}

  return (
    <div className="flex   ">
      <div className="bg-[#363740]">
        <Navbar />{" "}
      </div>
      <div className="w-full ">
        <Header />

        <div className=" mt-5 mx-10  bg-white font-Poppins h-[350px]">
          {post.map((val, ind) => (
           
            <div className="flex">
              <div className="flex items-center ml-5 mt-10">
                <img
                  src={Vector2}
                  className="rounded-full w-[150px] h-[150px] alt "
                />
              </div>

              <div
                key={ind}
                className="flex flex-col my-6 space-y-5 ml-10 mt-16"
              >
                <div className="flex space-x-4">
                  <label className="text-2xl font-medium">Name :</label>
                  <p className="text-lg text-[#4B506D]">{val.fullname}</p>
                </div>
                <div className="flex space-x-4">
                  <label className="text-2xl font-medium">Email :</label>
                  <p className="text-lg text-[#4B506D]">{val.email}</p>
                </div>
                <div className="flex space-x-4">
                  <label className="text-2xl font-medium">Password :</label>
                  <p className="text-lg text-[#4B506D]">{val.password}</p>
                </div>
                <div className="flex space-x-4">
                  <label className="text-2xl font-medium">Location :</label>
                  <p className="text-lg text-[#4B506D]">{val.location}</p>
                </div>
                <div className="flex space-x-4">
                  <label className="text-2xl font-medium">Wallet :</label>
                  <p className="text-lg text-[#4B506D]">{val.wallet}</p>
                  <StripeCheckout stripeKey="pk_test_51LRBTRSBkkgPPNpux27aS5fwYJfKioUXRavdY1XaRZB8TOMwC5QlMu0r32SMpbFgnLHmQszSytD9azXmrYZWGJsI002uvvzJMj" name="Add To Wallet" token={getwallet} amount={val.wallet*100}>
                    <button
                    
                      type="button"
                      class="text-white bg-[#263dbe]  font-medium rounded-lg text-sm px-5 py-2.5   "
                    > Add To Wallet</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end m-14 space-x-11 ">
            <button
              type="button"
              class="text-white bg-[#44454b]  font-medium rounded-lg text-sm px-5 py-2.5   "
              onClick={handleclick}
            >
              Edit Profile
            </button>
            <button
              type="button"
              class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={handleclick2}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          !model
            ? "hidden"
            : "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-Poppins"
        }
      >
        <div className="bg-white p-2 rounded w-4/12">
          <div class="flex justify-between items-start p-4 rounded-t border-b ">
            <h3 class="text-2xl font-semibold text-gray-900 ">Edit Profile</h3>
            <button
              type="button"
              onClick={handleclick}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-8 mt-2 text-colortxt font-medium ">
              <label>Name :</label>
              <label>Email :</label>
              <label>Address :</label>
            </div>
            <div className="flex flex-col space-y-2 mt-2 text- text-sm">
              <input
                className="bg-white  outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full p-2.5"
                placeholder="Jones Ferdinand"
              />
              <input
                className="bg-white  outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full p-2.5"
                placeholder="Jonesferdinand@gmail.com"
              />
            </div>
          </div>
          <textarea
            className="bg-white mt-3 outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full h-[150px] p-2.5"
            placeholder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
          />
          <hr />
          <div className="flex justify-around mt-2">
            <button
              type="button"
              class="text-white bg-[#44454b]  font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2 "
            >
              Save
            </button>
            <button
              type="button"
              class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Discard
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          !passw
            ? "hidden"
            : "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-Poppins"
        }
      >
        <div className="bg-white p-2 rounded w-4/12">
          <div class="flex justify-between items-start p-4 rounded-t border-b ">
            <h3 class="text-2xl font-semibold text-gray-900 ">
              Change Password
            </h3>
            <button
              type="button"
              onClick={handleclick2}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-8 mt-2 text-colortxt font-medium w-1/2">
              <label>Previous Password </label>
              <label>New Password </label>
              <label>Confirm Password </label>
            </div>
            <div className="flex flex-col space-y-2 mt-2 text- text-sm">
              <input
                className="bg-white  outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full p-2.5"
                type={password}
              />
              <input
                className="bg-white  outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full p-2.5"
                type={password}
              />
              <input
                className="bg-white  outline-none border border-[#6a6b70] focus:ring-4 focus:ring-[#b7b9c2]  placeholder:text-gray-300 text-sm  block w-full p-2.5"
                type={password}
              />
              <label className="text-blue-700" onClick={Eye}>
                {txt} password
              </label>
            </div>
          </div>
          <hr />
          <div className="flex justify-around mt-2">
            <button
              type="button"
              class="text-white bg-[#44454b]  font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2 "
            >
              Reset
            </button>
            <button
              type="button"
              class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
