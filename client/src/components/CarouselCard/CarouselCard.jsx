import React from "react";
import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card"
import appleAirPodsBanner from "../../assets/carousel_banners/Apple-AirPods-Pro-Banner-D-rev-2.jpg";
import appleIphoneBanner from "../../assets/carousel_banners/Apple-iPhone-14-banner-D-rev-1.avif";
import festiveTvBanner from "../../assets/carousel_banners/Festive-TV-Banner.jpg";
import LaptopBanner from "../../assets/carousel_banners/Laptop_deal.avif";
import oppoBanner from "../../assets/carousel_banners/Oppo_k12x_5g.webp";
import speakerBanner from "../../assets/carousel_banners/speakers.avif";
import stylersBanner from "../../assets/carousel_banners/stylers.avif";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselCard = () => {
    const images = [
        appleAirPodsBanner,
        appleIphoneBanner,
        festiveTvBanner,
        LaptopBanner,
        oppoBanner,
        speakerBanner,
        stylersBanner,
    ];
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <div>
        <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
            {images.map((image, index) => (
                <CarouselItem key={index}>
                <div className="p-1">
                    <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
        </div>
    );
};

export default CarouselCard;
