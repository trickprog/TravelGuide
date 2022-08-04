import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import OfferCardModal from './OfferCardModal';



const OfferCard = (props) => {
    const [open, setopen] = useState(false)
    const [ishovering, setishovering] = useState(false)
    const handleMouseEnter = () => {
        setishovering(true)
    }

    const handleMouseLeave = () => {
        setishovering(false)
    }

    return (

        <div className='flex flex-col items-center justify-center mt-2' >
            <div className=' bg-[#FFF5F9] rounded-lg border shadow-md  hover:bg-[#FACFE0] ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <div className=' relative '>
                 
                    <div className={ishovering ? 'absolute top-0 left-0 ' : 'hidden'}>
                        <button  onClick={() => { setopen(true) }}><EditIcon className='m-2' /></button>
                        {open && <OfferCardModal 
                            close={setopen}
                        />}
                    </div>
                    <div className={ishovering ? 'absolute top-0 right-0 ' : 'hidden'}>
                        <button onClick={props.delete} ><CloseIcon className='m-2' /></button>
                    </div>
                </div>
                <div class="flex flex-col items-center md:flex-row md:max-w-xl font-Poppins text-[#D27095]">
                    <div class="flex flex-col justify-between pl-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold  ">{props.title}</h5>
                        <p class="font-normal "><h5 class="inline-flex mb-2 text-4xl font-bold ">{props.price}%</h5> {props.type} </p>
                        <h5 class="text-2xl font-bold tracking-tight ">Discount</h5>
                    </div>
                    <img src={props.img} class="pl-2 object-cover w-[200px] h-[200px] " alt="" />
                </div>
            </div>
           
        </div>

    );
}


export default OfferCard;
