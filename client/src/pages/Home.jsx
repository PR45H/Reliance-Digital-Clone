import React from 'react'
import dussherBanner from '../assets/banners/Dusshera-HPMC-Banner-D-rev-3.avif'
import corporateGiftCard from '../assets/banners/Corporate-Gift-Card-Strip-Banner.avif'
import CarouselCard from '../components/CarouselCard/CarouselCard'
import Banner from '@/components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Navbar/Header'

const Home = () => {
    const content = [{
        label: "Find a Store",
        path: "/find-a-store"
    }, {
        label: "Buying Guides",
        path: "/buying-guides"
    }, {
        label: "Contact Us",
        path: "/contact-us"
    }]
    return (
        <div>
            <div className='bg-[#E42529] py-2'>
                <Header content={content} />
            </div>
            <div>
                <Navbar/>
            </div>
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