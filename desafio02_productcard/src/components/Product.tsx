import ProductImage from '../assets/product.png'
import ProductGif from '../assets/product_gif.gif'

import { Md360, MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'

export function Product() {
    const [isClicked, setIsClicked] = useState(false)

    function handleClickItem(){
        setIsClicked(!isClicked)
    }

    return (
        <div className='relative'>
            {isClicked ? 
            <img src={ProductGif} alt="" className='w-[450px] h-56'/>
            : 
            <img src={ProductImage} alt="" className='w-[450px] h-56'/>}
            

            <button className='absolute top-0 right-0' onClick={handleClickItem}>
                {isClicked ? <MdOutlineClose size={30} /> : <Md360 size={30} />}

            </button>
        </div>
    )
}