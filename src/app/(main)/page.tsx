'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
    return (
        <div className="flex gap-4 mt-4 h-100">
            {/* left */}
            <div className="w-3/5">
                {/* Carousel */}
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{ loop: true }}
                    className="w-full h-full"
                >
                    <CarouselContent className="h-full">
                        <CarouselItem>
                            <img
                                src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                                alt="Carousel 1"
                                className="w-full h-full"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="https://pakeplus.com/assets/phone1.Bg-YGh6e.webp"
                                alt="Carousel 2"
                                className="w-full h-full"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="https://pakeplus.com/assets/creat1.BYkNwqDR.webp"
                                alt="Carousel 3"
                                className="w-full h-full"
                            />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            {/* right */}
            <div className="w-2/5 flex flex-col">
                {/* top */}
                <div className="w-full h-3/5 pb-4">
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="w-full h-full"
                    />
                </div>
                {/* bottom */}
                <div className="w-full h-2/5 flex">
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="w-1/2 pr-2"
                    />
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="w-1/2 pl-2"
                    />
                </div>
            </div>
        </div>
    )
}
