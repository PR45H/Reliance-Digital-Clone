import React from 'react'
import dussherBanner from '../assets/banners/Dusshera-HPMC-Banner-D-rev-3.avif'
import corporateGiftCard from '../assets/banners/Corporate-Gift-Card-Strip-Banner.avif'
import CarouselCard from '../components/CarouselCard/CarouselCard'
import Banner from '@/components/Banner/Banner'

const Home = () => {
    return (
        <div>
            <div className="welcomeBanner">
                <Banner images={dussherBanner} />
            </div>
            <div className="carouselBanner">
                <CarouselCard />
            </div>

            <div className="welcomeBanner">
                <Banner images={corporateGiftCard} />
            </div>
        </div>
    )
}

export default Home