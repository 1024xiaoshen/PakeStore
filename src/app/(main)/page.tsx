'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronRightIcon } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    // 必备应用
    const essentialApps = [
        {
            id: 1,
            title: '微信',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 2,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxjqj0LsYhYzaQpywh80DWhp9R_PUUwlUC6HwDrFW3t0lL25If1sXp1InDT2RlVNX5wBQtLPGAqQ72bPB09xzTzE-&format=source&w=150',
        },
        {
            id: 3,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBQafG.qIxSOBbxlRUqcBfHShbF4q_iA3v2iZYGAxXnmuUoEh.0VsJZVS7Pj3HBg9r1xoDDnS3YOgyTctYinYD38-&format=source&w=150',
        },
        {
            id: 4,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 5,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 6,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 7,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 8,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
        {
            id: 9,
            title: 'QQ',
            description: '社交聊天届的龙头',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxl33gjvYDEfZR.qiz4WDwgYuLSp2TY89.N9qLIZ2cFoU2UuVLrceRcXuJosVhPaax.HQPeAZtiPTZrFpSqBihfE-&format=source&w=150',
        },
    ]

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4">
            {/* 轮播图 */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
                {/* left */}
                <div className="col-span-1 lg:col-span-3 h-48 sm:h-64 md:h-80 lg:h-full">
                    {/* Carousel */}
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                        opts={{ loop: true }}
                        className="w-full h-full rounded-lg overflow-hidden shadow-lg"
                    >
                        <CarouselContent className="h-full cursor-pointer">
                            <CarouselItem>
                                <img
                                    src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqQCi00OjlLOPIu.iaIAqkKDd2lnPYvKM79BnhiJV81NRD9XY6QpMbgmc20Oyka.d1RnAQ8o0Sv_J4FhgNWPhmg078vbw0tTUkJtkdLLvM1Io0e0i3KZV4FYRNIw.RjySeQK94t0VF7Y_px4RLxRGXSA--&h=576"
                                    alt="Carousel 1"
                                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqOSn8CPd90fsraRmDxWrhEZO2rwES0.r4Bu8hrBo4ans56CnzMYsJnpZVZAEMcnjYda1Bwx5mqClvTk2jTQpAhV._dV6MYikF0a6U6T9WeGXLfElzkKy3afFideaGHRl5GykrfMruL6NS6U6RnUgG9g--&h=576"
                                    alt="Carousel 2"
                                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq.vqLEWhLm6RfSPtPRLstcczS9PY4PzMPd1.9363AGmHSJt0_TyGuoXDcqcfbaMwqhQhMlDAYTHhQLBUYCRlpmMUfC8.10LAu_HGRc2mbBR48iEiUqQdZFuxLBm7Jkc5Z&h=576"
                                    alt="Carousel 3"
                                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex translate-x-4 lg:translate-x-12 cursor-pointer bg-opacity-50 border-none outline-none" />
                        <CarouselNext className="hidden sm:flex -translate-x-4 lg:-translate-x-12 cursor-pointer bg-opacity-50 border-none outline-none" />
                    </Carousel>
                </div>
                {/* right */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-3 sm:gap-4 mt-4 lg:mt-0">
                    {/* top */}
                    <div className="w-full h-32 sm:h-40 md:h-48 lg:h-3/5">
                        <img
                            src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqCSbtOF5YFDZDFnmijK.J6q9cWbkYQAmWtfL_TuqdU_kz1xw5r83C5A84AK4m9yd_XIVGEpYfRdKswxH4uktA6zxLVpIkTnV09bls85dRoOUwICTmqBTX8WXnGU4j8PcD&h=576"
                            alt="Carousel 1"
                            className="w-full h-full object-cover rounded-lg overflow-hidden cursor-pointer hover:scale-103 transition-all duration-300 shadow-lg"
                        />
                    </div>
                    {/* bottom */}
                    <div className="w-full h-24 sm:h-32 md:h-40 lg:h-2/5 flex gap-2 sm:gap-4">
                        <img
                            src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqaEGurlP7vBRHS3.OrJm3vUQarOg8C0.kkpsbh7qfsP5TjBt8uatInkPl4QoiqN6Pam4MGPZNujJK3hhKs11rCTJAaxodwJDc_CH0n9sguyIPIA1gvt_6hIX3yQeKaXJSOs0kX9JyWenxIYCrcHKW7Q--&h=576"
                            alt="Carousel 1"
                            className="w-1/2 object-cover rounded-lg overflow-hidden cursor-pointer hover:scale-103 transition-all duration-300 shadow-lg"
                            onClick={() => router.push('/detail')}
                        />
                        <img
                            src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqxUWfpl9URofPkQUyZFIMhCZw_p6JAcffI97rYbywnJ9Z3dd29VBxhpQ4yW3hIjGkk2YPDj2tWk7dT13imkgi.WTScyY_nkeANmS55VNJNzCcD.LID.kHxdX5SrELlbDrT4d0MrFcXPURqkLZus6pQQ--&h=576"
                            alt="Carousel 1"
                            className="w-1/2 object-cover rounded-lg overflow-hidden cursor-pointer hover:scale-103 transition-all duration-300 shadow-lg"
                            onClick={() => router.push('/detail')}
                        />
                    </div>
                </div>
            </div>
            {/* 专题 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 sm:mt-4 mb-4">
                <div
                    className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-blue-300 to-indigo-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg"
                    onClick={() => router.push('/topic?topic=1')}
                >
                    新人必备
                </div>

                <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-green-300 to-emerald-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg">
                    图像视频
                </div>

                <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-amber-300 to-orange-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg">
                    生产力
                </div>

                <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-red-300 to-pink-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg">
                    游戏娱乐
                </div>

                <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-purple-300 to-indigo-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg col-span-2 sm:col-span-3 lg:col-span-1">
                    AI工具
                </div>
            </div>
            {/* 推荐应用 */}
            <div className="mt-4 sm:mt-6">
                <div className="text-xl sm:text-2xl font-bold flex justify-start items-center cursor-pointer hover:text-blue-500">
                    <span>必备应用</span>
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    {essentialApps.map((item) => (
                        <div
                            key={item.id}
                            className="h-auto min-h-24 sm:min-h-30 bg-background border border-secondary shadow-md p-3 sm:p-4 flex justify-between items-center rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] hover:bg-card"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border border-secondary"
                                />
                                <div className="text-base sm:text-lg font-bold flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        v1.0.0
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            {/* 下载 */}
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://www.baidu.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                                >
                                    免费下载
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 应用列表 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    {essentialApps.map((item) => (
                        <div
                            key={item.id}
                            className="h-auto min-h-24 sm:min-h-30 bg-background border border-secondary shadow-md p-3 sm:p-4 flex justify-between items-center rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border border-secondary"
                                />
                                <div className="text-base sm:text-lg font-bold flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        v1.0.0
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            {/* 下载 */}
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://www.baidu.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                                >
                                    免费下载
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 探索与发现 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                    <span>探索与发现</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-blue-300 to-indigo-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        这些工具你还不知道？
                    </div>

                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-green-300 to-emerald-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        AI时代，你准备好了吗？
                    </div>

                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-amber-300 to-orange-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        提升生产力，从这里开始！
                    </div>
                </div>
            </div>
            {/* 重复的部分也应用相同的响应式样式 */}
            {/* 必备应用 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>必备应用</span>
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    {essentialApps.map((item) => (
                        <div
                            key={item.id}
                            className="h-auto min-h-24 sm:min-h-30 bg-background border border-secondary shadow-md p-3 sm:p-4 flex justify-between items-center rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border border-secondary"
                                />
                                <div className="text-base sm:text-lg font-bold flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        v1.0.0
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            {/* 下载 */}
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://www.baidu.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                                >
                                    免费下载
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 推荐应用 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    {essentialApps.map((item) => (
                        <div
                            key={item.id}
                            className="h-auto min-h-24 sm:min-h-30 bg-background border border-secondary shadow-md p-3 sm:p-4 flex justify-between items-center rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border border-secondary"
                                />
                                <div className="text-base sm:text-lg font-bold flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        v1.0.0
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            {/* 下载 */}
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://www.baidu.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                                >
                                    免费下载
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 探索与发现 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                    <span>探索与发现</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-blue-300 to-indigo-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        AI提升效率？来这里！
                    </div>

                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-green-300 to-emerald-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        有手就行？试试这个！
                    </div>

                    <div className="card h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-br from-amber-300 to-orange-400 hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer select-none shadow-lg text-center px-2">
                        提高生产力，从这里开始！
                    </div>
                </div>
            </div>
            {/* 应用列表 */}
            <div className="mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500">
                    <span>推荐应用</span>
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    {essentialApps.map((item) => (
                        <div
                            key={item.id}
                            className="h-auto min-h-24 sm:min-h-30 bg-background border border-secondary shadow-md p-3 sm:p-4 flex justify-between items-center rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border border-secondary"
                                />
                                <div className="text-base sm:text-lg font-bold flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        v1.0.0
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            {/* 下载 */}
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://www.baidu.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                                >
                                    免费下载
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
