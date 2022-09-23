import React, { useState, useEffect } from "react";

import axios from "axios";

export default function VerifyTbody(props) {
  const [open, setopen] = useState(false);
  const [input, setinput] = useState(false);
  const [Reason, setReason] = useState('');
  let arr = props.documents;
  const aprroveUser = (uid) => {
    console.log(uid);
    const user = {
      approprops: true,
    };
    axios
      .post(
        `https://backendtravelguide.herokuapp.com/admin/approval/${uid}`,
        user
      )
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const rejectUser = (uid) => {
    const user = {
      reject: true,
      reason:Reason,
    };
    axios
      .post(
        `https://backendtravelguide.herokuapp.com/admin/reject/${uid}`,
        user
      )
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const autoreject = () => {
    if (arr === undefined) {
      console.log("moiz");
      setReason('Auto Generated: No Docmuents Found')
      rejectUser(props.UserId);
    }
  };
  autoreject();

  return (
    <>
      <tr class="bg-white border-b  font-medium text-black">
        <th
          scope="row"
          class="py-4 px-6 font-medium  whitespace-nowrap text-lg"
        >
          {props.userName}
          <p className="text-gray-500 text-sm">{props.role}</p>
        </th>

        <td class="py-4 px-6">
          <button onClick={() => setopen(true)}>Documents </button>
          <div
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
              onClick={() => setopen(false)}
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

            <div class="flex justify-start p-6 text-center">
              <a
                href={props.documents[0]}
                class="mx-2 max-w-xs sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <div class="text-left">
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Download The Document
                  </div>
                </div>
              </a>
              <a
                href={props.documents[1]}
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
      </div>
        </td>

        <td class="py-4 px-6">
          <button
            value={props.UserId}
            onClick={(e) => aprroveUser(e.target.value)}
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Approve
          </button>
          <button
            onClick={(e) => setinput(true)}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Decline
          </button>
          <div className="flex">
            <input
            value={Reason}
            onChange={(e)=>setReason(e.target.value)}
              type="text"
              id="first_name"
              class={
                !input
                  ? "hidden"
                  : "bg-gray-500  text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
              }
              placeholder="Reason For Rejecting"
              required
            />
            <button
              value={props.UserId}
              onClick={(e) => rejectUser(e.target.value)}
              type="button"
              class={!input
                ? "hidden":"focus:outline-none text-black ml-1 font-medium rounded-lg text-sm "}
            >
              submit
            </button>
          </div>
        </td>
      </tr>
    
    </>
  );
}
