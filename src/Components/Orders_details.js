import React from "react";
import OrderCard from "./OrderCard";
import pf from "../assets/photo2.png";
import Navbar from "./Navbar";
import Header from "./Header";
import { useLocation } from "react-router-dom";
const Orderdet = () => {
  let location = useLocation().state.state;
  console.log("dsn", location);

  const arr = location.orderDetails.split(/\r?\n/);

  const TotalPrice =location.price
  const adminShares=20/100*TotalPrice
 const guideShares=80/100*TotalPrice


  return (
    <div className="flex ">
      <div className="bg-[#363740]">
        <Navbar />{" "}
      </div>
      <div className="w-full ">
        <Header />
        <div className=" mt-5 mx-10  bg-white h-1/2">
          <div className="">
            <div className="flex  justify-end">
              <div className="mr-auto flex m-5 ">
                <div className=" flex flex-col ml-5 ">
                  <label className=" font-Poppins font-medium  text-black ">
                    {location.guide}
                  </label>
                  <label className=" font-Poppins font-medium text-gray-300  text-xs">
                    Updated 1 day ago
                  </label>
                </div>
              </div>

              <label className="pt-3 font-Poppins font-medium m-5 ">
                View Guide Profile
              </label>
            </div>
          </div>

          <div className="flex justify-evenly ">
            <div>
              <div className="p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 ">
                <h5 className="mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]">
                  Order Amount
                </h5>
                <p className="mb-3 font-medium text-2xl font-Poppins text-center text-black  group-hover:text-red-400">
                ${location.price}/hr
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 ">
                <h5 className="mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]">
                  Admin Shares
                </h5>
                <p className="mb-3 font-medium text-2xl font-Poppins text-center text-black  group-hover:text-red-400">
                ${adminShares}/hr
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 ">
                <h5 className="mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]">
                  Guide
                </h5>
                <p className="mb-3 font-medium text-2xl font-Poppins text-center text-black  group-hover:text-red-400">
                ${guideShares}/hr
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 w-[200px] group h-[134px] bg-white rounded-lg border hover:border-blue-700 border-gray-200 ">
                <h5 className="mb-2 text-base font-bold tracking-tight text-center  group-hover:text-red-400 text-[#9FA2B4]">
                  On hold
                </h5>
                <p className="mb-3 font-medium text-2xl font-Poppins text-center text-black  group-hover:text-red-400">
                ${location.onhold}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  justify-end mt-[50px]">
            <div className="mr-auto flex flex-col  m-5 ">
              <label className=" font-Poppins font-medium  text-blue-600 ">
                {location.Traveller}
              </label>
              <label className="pt-1  font-Poppins font-medium text-gray-500  text-xs">
                on {arr[1]}
              </label>
            </div>
            <div className=" flex flex-col  m-5 ">
              <label className=" font-Poppins font-medium  text-black ">
                {arr[2]}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdet;
