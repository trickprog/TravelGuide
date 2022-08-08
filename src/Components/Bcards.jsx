import React from 'react'

function Bcards() {
    const values =
    {
        id: 0,
        req: 4238,
        respone: 1005,
        pending: 914


    }

    return (
        <>
            <div className='flex  mt-10 mb-5 mx-7  w-1/2 '>
                <div className='  w-full h-[340px] bg-white rounded-[8px] border-[1px] border-[#DFE0EB]'>
                    <div className='flex pt-4 pl-5 justify-between'>
                        <label className='font-Poppins  font-semibold text-[24px] '>Underdiscussion Orders</label>
                        <label className='text-[rgb(55,81,255)] font-Poppins font-medium  mt-2 mr-2'>View Details</label>
                    </div>
                    <div className='text-sm pl-5 font-Poppins'>
                        <label className='text-[#9FA2B4] '>Group: </label>
                        <label> Support</label>
                    </div>

                    <div className='flex flex-col pt-6 font-Poppins font-medium '>
                        <div className='flex justify-between'>
                            <label className='pl-5 pb-3  '>
                                Waiting on Message Request
                            </label>
                            <p className=' text-[#9FA2B4] mr-10 '>{values.req}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <label className='pl-5 pb-3  '>
                                Awating Customer Response
                            </label>
                            <p className=' text-[#9FA2B4]  mr-10'>{values.respone}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <label className='pl-5 pb-3  '>
                                Pending
                            </label>
                            <p className=' text-[#9FA2B4] mr-10 '>{values.pending}</p>
                        </div>

                    </div>


                </div>





            </div>
            <div className='flex  mt-10 mb-5 mx-7 w-1/2 '>
                <div className='  w-full h-[340px] bg-white rounded-[8px] border-[1px] border-[#DFE0EB]'>
                    <div className='flex pt-4 pl-5 justify-between'>
                        <label className='font-Poppins  font-semibold text-[24px] '>Admin Todo</label>
                        <label className='text-[rgb(55,81,255)] font-Poppins font-medium  mt-2 mr-8'>View all</label>
                    </div>
                    <div className='text-sm pl-5 font-Poppins'>
                        <label className='text-[#9FA2B4] '>Today </label>

                    </div>

                    <div className='flex flex-col pt-6 font-Poppins font-medium  '>



                        <div className='flex justify-between mr-5'>
                            <div className='pl-5 pb-3  '>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4  rounded-full text-blue-600 " />
                                <label className='ml-5'>Finish Order Update</label></div>
                            <button type="button" className=" text-white bg-yellow-400  font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 ">URGENT</button>
                        </div>


                        <hr />
                        <div className='flex justify-between mr-5 '>


                            <div className='pl-5 pb-3  '>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 rounded-full text-blue-600 " />
                                <label className='ml-5'>   Create new order example </label></div>
                            <button type="button" className=" text-white bg-[#29CC97]  font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 ">NEW</button>
                        </div>
                        <hr />
                        <div className='flex  justify-between mr-5'>


                            <div className='pl-5 pb-3   '>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 rounded-full text-blue-600 " />
                                <label className='ml-5'> Update order report </label></div>
                            <button type="button" className=" text-white bg-[#9FA2B4] font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 ">DEFAULT</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Bcards