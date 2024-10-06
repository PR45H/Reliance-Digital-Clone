import React from 'react'
import dussherBanner from '../assets/banners/Dusshera-HPMC-Banner-D-rev-3.avif'
import CarouselCard from '../components/CarouselCard/CarouselCard'

const Home = () => {
    return (
        <div>
            <div className="welcomeBanner">
                <img src={dussherBanner} alt="Dusshera Banner" className='w-full h-full object-cover' />
            </div>
            <div className="carouselBanner">
                <CarouselCard />
            </div>
        </div>
    )
}

export default Home