import React, { useState } from 'react'
import vid1 from '../img/1-min.mp4'
import vid2 from '../img/2-min.mp4'
import vid3 from '../img/3-min.mp4'
import vid4 from '../img/4-min.mp4'

import './gallery.css'
import { saveAs } from 'file-saver'

const Videos = () => {
    let data = [
        {
            id: 1,
            vidSrc: vid1,
        },
        {
            id: 2,
            vidSrc: vid2,
        },
        {
            id: 3,
            vidSrc: vid3,
        },
        {
            id: 4,
            vidSrc: vid4,
        },

    ]
    const [model, setModel] = useState(false)
    const [vidsrc, setvidsrc] = useState('')
    const getvid = (vidSrc) => {
        setvidsrc(vidSrc)
        setModel(true)



    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
            </div>
            <div className='mt-[70px] ml-[30px] columns-2 '>
                {data.map((item, index) => {
                    return (
                        <div className='pics p-10' key={index} >
                            <video controls >
                                <source src={item.vidSrc}  >
                                </source>
                            </video>
                           
                           
                        </div>

                    )
                })

                }

            </div>

        </>
    )
}

export default Videos