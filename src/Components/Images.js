import React, { useState } from 'react'
import img1 from '../img/1-min.jpg'
import img2 from '../img/2-min.jpg'
import img3 from '../img/3-min.jpg'
import img4 from '../img/4-min.jpg'
import img5 from '../img/5-min.jpg'
import img6 from '../img/6-min.jpg'
import img7 from '../img/7-min.jpg'
import img8 from '../img/8-min.jpg'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver'
import Navbar from './Navbar'

const Images = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        }
        , {
            id: 5,
            imgSrc: img5,
        }
        , {
            id: 6,
            imgSrc: img6,
        }
        , {
            id: 7,
            imgSrc: img7,
        }
        , {
            id: 8,
            imgSrc: img8,
        }

    ]
    const [model, setModel] = useState(false)
    const [temimgsrc, settempimgsrc] = useState('')
    const getImg = (imgSrc) => {
        settempimgsrc(imgSrc)
        setModel(true)



    }
    const downloadImage = () => {

        saveAs(temimgsrc, 'image.jpg')
        // console.log(temimgsrc)
    }
    return (
        <>
                 <div className="flex ">
    <div className='bg-[#585269]'><Navbar/></div>
            <div className={model ? 'model open' : 'model'}>
                <DownloadIcon onClick={downloadImage} className='absolute left-3' />
                <img src={temimgsrc} />

                <CloseIcon onClick={() => setModel(false)} />

            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>

                    )
                })

                }

            </div>
            </div>

        </>
    )
}

export default Images