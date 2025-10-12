'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
    return (
        <div className="flex gap-4 mt-4 h-100">
            {/* left */}
            <div className="w-2/3 h-full">
                <div className="w-full h-full">
                    {/* Carousel */}
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        opts={{ loop: true }}
                        className="w-full"
                    >
                        <CarouselContent>
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
            </div>
            {/* right */}
            <div className="w-1/3 flex flex-col gap-4">
                {/* top */}
                <div className="w-full h-3/5 bg-green-500">
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="w-full h-full"
                    />
                </div>
                {/* bottom */}
                <div className="w-full h-2/5 flex gap-4">
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="h-full"
                    />
                    <img
                        src="https://pakeplus.com/assets/config1.B4u9PEWG.webp"
                        alt="Carousel 1"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    )
}
