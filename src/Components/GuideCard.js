import React from 'react';
import Vector from '../assets/sort.png';
import { Link } from 'react-router-dom';
const GuideCard = (props) => {
    let color = 'red'
    if (props.Status=== 'active') {
        color = 'bg-[#CEFFC1]'
    }
    if (props.Status=== 'inactive') {
        color = 'bg-[#FFC1C1]'
    }
  
    return (
        <>
     <tbody>
            <tr class="bg-white border-b  text-colortxt">
                
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex">
                <img class="w-[44px] h-[44px]  rounded-full" src={props.img} alt="pf" />
                <Link  to='/Details' className='mt-2.5 ml-2'
                    state={{state:props}}
                    >{props.Name}</Link>
                </th>
                <td class="py-4 px-6">
                    {props.Location}
                </td>
                <td class="py-4 px-6">
                    12-10-2022
                </td>
                <td class="py-4 px-6">
                    {props.Email}
                </td>
                <td class="py-4 px-6 ">
                <button type="button"
                            className={` rounded-[100px] bg-{{color}}  px-4 py-1  ${color}`}
                            >{props.Status}</button>
                </td>
     
                    


</tr>

        </tbody>
        </>
    );
}

export default GuideCard;
