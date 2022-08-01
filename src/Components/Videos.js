import React, { useState } from 'react'
import vid1 from '../vedios/1-min.mp4'
import vid2 from '../vedios/2-min.mp4'
import vid3 from '../vedios/3-min.mp4'
import vid4 from '../vedios/4-min.mp4'

import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
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
    const downloadImage = () => {

        saveAs(vidsrc, 'vedio.mp4')
        
        // console.log(vidsrc)
    }
    return (
        <>
            <div className={model ? 'model open' : 'model'}>
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} >
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