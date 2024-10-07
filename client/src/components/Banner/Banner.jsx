import React from 'react'

const Banner = ({ images }) => {
    return (
        <div>
            <img src={images} alt="Dusshera Banner" className='w-full h-full object-cover' />
        </div>
    )
}

export default Banner