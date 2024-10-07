import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
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
    // TODO: create a db for carousel images
    // created a images array to easily map the images
    const images = [
        appleAirPodsBanner,
        appleIphoneBanner,
        festiveTvBanner,
        LaptopBanner,
        oppoBanner,
        speakerBanner,
        stylersBanner,
    ];
    // created a plugin to autoplay the carousel
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    return (
        <div className="w-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                {/* mapping the images to the carousel */}
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card className="w-full">
                                <CardContent className="p-0">
                                    <img 
                                        src={image} 
                                        alt={`Carousel image ${index + 1}`} 
                                        className="w-full h-full object-contain"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* created a previous and next button for the carousel */}
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
        </div>
    );
};

export default CarouselCard;
