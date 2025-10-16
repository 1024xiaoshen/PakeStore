'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { RocketIcon, ChevronRightIcon } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-4">
            {/* 轮播图 */}
            <div className="flex gap-4 h-100">
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
                                    src="https://files.pakeplus.com/sponsor.webp"
                                    alt="Carousel 1"
                                    className="w-full h-full rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/code_assistant/8cc75f6e926c4ab493ccef093284e40f~tplv-a9rns2rl98-image.image?rcl=202510132129542CBCAD61CC48B2227BC0&rk3s=8e244e95&rrcfp=1db6ccd3&x-expires=1760966994&x-signature=pzDqPlmlDZGlRTZIMCo2XuqRfZM%3D"
                                    alt="Carousel 2"
                                    className="w-full h-full rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/code_assistant/f4b020d3fafa4f4ea879fb63008df177~tplv-a9rns2rl98-image.image?rcl=202510132129541FAF3484354C47151FEB&rk3s=8e244e95&rrcfp=1db6ccd3&x-expires=1760966994&x-signature=IMymMN30mGS4I%2F5brXPKm2yWK8I%3D"
                                    alt="Carousel 3"
                                    className="w-full h-full rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="translate-x-8 cursor-pointer" />
                        <CarouselNext className="-translate-x-8 cursor-pointer" />
                    </Carousel>
                </div>
                {/* right */}
                <div className="w-2/5 flex flex-col">
                    {/* top */}
                    <div className="w-full h-3/5 pb-4">
                        <img
                            src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/code_assistant/807827e6f737429384e27b0870fb1edf~tplv-a9rns2rl98-image.image?rcl=20251013212954C6DEB14F734CA503A2E2&rk3s=8e244e95&rrcfp=1db6ccd3&x-expires=1760966994&x-signature=EGk5Bj0iijys3kMGBKJ540jlgCA%3D"
                            alt="Carousel 1"
                            className="w-full h-full rounded-lg overflow-hidden"
                        />
                    </div>
                    {/* bottom */}
                    <div className="w-full h-2/5 flex">
                        <img
                            src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/code_assistant/f21b2f6e53ce41dcbaaf824bad894dc3~tplv-a9rns2rl98-image.image?rcl=20251013212954AEBF6301423923FB57EC&rk3s=8e244e95&rrcfp=1db6ccd3&x-expires=1760966994&x-signature=aaOJQJipXBI%2FoQGWUHWMrb%2FaHcI%3D"
                            alt="Carousel 1"
                            className="w-1/2 mr-2 rounded-lg overflow-hidden"
                        />
                        <img
                            src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/code_assistant/71db5eeb63094665abc6a00e3addf418~tplv-a9rns2rl98-image.image?rcl=20251013212954D8AAB5FD6E625C03D8CA&rk3s=8e244e95&rrcfp=1db6ccd3&x-expires=1760966994&x-signature=il8EhL6MGKo4AjdXgTp6EBOX8pY%3D"
                            alt="Carousel 1"
                            className="w-1/2 ml-2 rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
            </div>
            {/* 专题 */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="h-40 bg-pink-500 flex items-center justify-center rounded-lg">
                    新人必备
                </div>
                <div className="h-40 bg-green-500 flex items-center justify-center rounded-lg">
                    图像视频
                </div>
                <div className="h-40 bg-amber-300 flex items-center justify-center rounded-lg">
                    生产力
                </div>
            </div>
            {/* 推荐应用 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>必备应用</span>
                    <ChevronRightIcon />
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-orange-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                </div>
            </div>
            {/* 应用列表 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon />
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-orange-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                </div>
            </div>
            {/* 探索与发现 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center">
                    <span>探索与发现</span>
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-40 bg-pink-500 flex items-center justify-center rounded-lg">
                        新人必备
                    </div>
                    <div className="h-40 bg-green-500 flex items-center justify-center rounded-lg">
                        图像视频
                    </div>
                    <div className="h-40 bg-amber-300 flex items-center justify-center rounded-lg">
                        生产力
                    </div>
                </div>
            </div>
            {/* 推荐应用 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>必备应用</span>
                    <ChevronRightIcon />
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-orange-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                </div>
            </div>
            {/* 应用列表 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon />
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-orange-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                </div>
            </div>
            {/* 探索与发现 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center">
                    <span>探索与发现</span>
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-40 bg-pink-500 flex items-center justify-center rounded-lg">
                        新人必备
                    </div>
                    <div className="h-40 bg-green-500 flex items-center justify-center rounded-lg">
                        图像视频
                    </div>
                    <div className="h-40 bg-amber-300 flex items-center justify-center rounded-lg">
                        生产力
                    </div>
                </div>
            </div>
            {/* 应用列表 */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon />
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-orange-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-pink-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-green-500 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-amber-300 flex items-center justify-center rounded-lg"></div>
                    <div className="h-30 bg-blue-500 flex items-center justify-center rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}
