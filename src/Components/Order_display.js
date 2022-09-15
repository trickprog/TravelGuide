import React from 'react'
import Vector from '../assets/dots.png';
import {Link, useNavigate} from 'react-router-dom'

function Order_display(props) {
    let color='red'
    if (props.Profit==='LOW'){
        color='bg-[#FEC400]'
    }
    if (props.Profit==='HIGH'){
        color='bg-[#F12B2C]'
    }
    if (props.Profit==='NORMAL'){
        color='bg-[#29CC97]'
    }
    const navigate = useNavigate()
const handleclick=()=>{
navigate('/Ordersdet')
}

    return (
        
        <>
     <tbody>
            <tr class="bg-white border-b  text-colortxt text-black font-medium">
                
                <th scope="row" class="py-4 px-6 font-medium    whitespace-nowrap flex">
                <img class="w-[44px] h-[44px]  rounded-full" src={props.img} alt="Neil image" />
                <td class="py-4 px-6 font-medium cursor-pointer" onClick={handleclick}>
                <Link  to='/Ordersdet' className='mt-2.5 ml-2'
                    state={{state:props}}
                    >{props.guide}</Link>
                    
                </td>
                </th>
                <td class="py-4 px-6 ">
                    {props.Traveller}
                    <td className='text-gray-500 text-xs '>
               on {props.ondate}
                </td>
                </td>
               
                <td class=" ">
                    {props.Date}
                    <td className='text-gray-500 text-xs '>
                {props.Time}
                </td>
                </td>
           

                <td class="py-4 px-6 ">
                <button type="button "
                            className={` rounded-[100px] bg-{{color}}  px-4 py-1 text-white ${color}`}
                            >{props.Profit}</button>
                </td>
                <td class="py-4 px-6">
                    <img src={Vector}/>
                </td>
     
                    


</tr>

        </tbody>
        </>
      

    )
}

export default Order_display