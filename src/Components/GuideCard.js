import React, { useState,useRef,useEffect } from "react";
import Vector from "../assets/dots.png";
import { Link } from "react-router-dom";
import axios from "axios";
const GuideCard = (props) => {
  let color = "red";
  if (props.Status === "active") {
    color = "bg-[#CEFFC1]";
  }
  if (props.Status === "inactive") {
    color = "bg-[#FFC1C1]";
  }
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [modal, setmodal] = useState(false);
  const [Fullname, setFullname] = useState("");
  const [location, setlocation] = useState("");
  const ref = useRef()
  const deleteUser = (uid) => {
    console.log(uid);
    axios
      .delete(`https://backendtravelguide.herokuapp.com/admin/user/${uid}`)
      .then((res) => {
        alert("User Deleted");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const suspendUser = (uid) => {
    console.log(uid);
    const userdata = {
      suspend:true,
    };
    axios
      .post(
        `https://backendtravelguide.herokuapp.com/admin/suspend/${uid}`,
        userdata
      )
      .then((res) => {
        alert("User Updated");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateUser = (uid) => {
    console.log(uid);
    const userdata = {
      city: location,
      userName: Fullname,
    };
    axios
      .post(
        `https://backendtravelguide.herokuapp.com/admin/user/${uid}`,
        userdata
      )
      .then((res) => {
        alert("User Updated");
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setopen(false)
        setopen1(false)
        setmodal(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [])
  return (
    <>
      <tbody >
        <tr  class="bg-white border-b  font-medium text-black">
          <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap flex">
            <img
              class="w-[44px] h-[44px]  rounded-full"
              src={props.img}
              alt="pf"
            />
            <Link
              to="/Details"
              className="mt-2.5 ml-2"
              state={{ state: props }}
            >
              {props.Name}
            </Link>
          </th>
          <td class="py-4 px-6">{props.Location}</td>
          <td class="py-4 px-6">12-10-2022</td>
          <td class="py-4 px-6">{props.Email}</td>

          <td class="py-4 px-6 overflow-auto " ref={ref} >
            <button onClick={() => setopen(oldState => !oldState)} class=" py-2 pr-24 cursor-pointer"  >
              <img src={Vector}  />
            </button>
            { open&&
      <div
         
         class=
           "z-10 w-28 bg-black divide-y rounded shadow " 
         
    
       >
         <ul
           class="py-1 text-sm text-white"
       
         >
            <li className="py-1">
             <button onClick={() => setopen1(true)} class="block  px-4">
               Documents
             </button>
           </li>
           
           <li className="py-1">
             <button onClick={() => setmodal(true)} class="block  px-4">
               Edit
             </button>
           </li>

           <li className="py-1">
             <button
               value={props.uid}
               onClick={(e) => deleteUser(e.target.value)}
               class="block  px-4"
             >
               Delete
             </button>
           </li>

           <li className="py-1">
             <button
               value={props.uid}
               onClick={(e) => suspendUser(e.target.value)}
               class="block  px-4"
             >
               Suspend
             </button>
           </li>
         </ul>
       </div>}

          </td>
          
        </tr>
      </tbody>


{    open1&&  <div
            id="popup-modal"
            tabindex="-1"
            class={
              open
                ? " fixed top-[25%] right-0 left-[40%] bottom-0 z-50  h-modal  justify-center items-center"
                : "hidden"
            }
            aria-hidden="true"
          >
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-200">
                <button
                  onClick={() => setopen1(false)}
                  type="button"
                  class="absolute top-1 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 "
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

                <div class="grid grid-cols-2 gap-5 p-6 text-center">
                  <button

                    class="mx-3 max-w-xs sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    download
                  >
                    <div class="text-left ">
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Download The Document
                      </div>
                    </div>
                  </button>
                  <a

                    class="mx-3 max-w-xs sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <div class="text-left">
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Download The Document
                      </div>
                    </div>
                  </a>
                  <a
               
            
                    class="mx-3 max-w-xs sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <div class="text-left">
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Download The Document
                      </div>
                    </div>
                  </a>
                  <a
      
                    class="mx-3 max-w-xs sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <div class="text-left">
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Download The Document
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>}

      {modal && (
        <div
          id="authentication-modal"
          tabindex="-1"
          className="fixed top-0 right-0 left-0  z-50  items-center justify-center flex h-screen bg-gray-500 bg-opacity-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow-lg ">
              <button
                onClick={() => setmodal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover: placeholder: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
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
                <span className="sr-only">Close modal</span>
              </button>

              <div className="py-6 px-6 lg:px-8 text-colortxt">
                <h3
                  className="mb-4 text-xl font-medium  "
                  style={{ marginBottom: 30 }}
                >
                  Users Information
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <input
                      type="text"
                      className="bg-white outline-none border border-black focus:ring-4 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="UserName"
                      value={Fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-white outline-none border border-black focus:ring-4 focus:ring-black placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Email "
                      value={props.Email}
                    />
                  </div>
                  <div>
                    <input
                      type="text "
                      className="bg-white  outline-none border border-black focus:ring-4 focus:ring-black  placeholder:text-black text-sm rounded-lg block w-full p-2.5"
                      placeholder="Password "
                      value={props.uid}
                    />
                  </div>
                  <div></div>

                  <div className="flex justify-around">
                    <button
                      value={props.uid}
                      onClick={(e) => updateUser(e.target.value)}
                      type="button"
                      class="text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Save
                    </button>
                    <button
                                    onClick={() => setmodal(false)}
                      type="button"
                      class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      Discard
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GuideCard;
