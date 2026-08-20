'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import { appList } from '@/lib/appData'

export default function Topic() {
    return (
        <Suspense>
            <TopicPage />
        </Suspense>
    )
}

const TopicPage = () => {
    const searchParams = useSearchParams()
    const topic = searchParams.get('topic') || '1'

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 pb-20">
            {/* 头部 */}
            <div className="flex justify-center items-center my-8 lg:my-16">
                <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                        新人必备的应用
                    </h1>
                    <p className="text-base sm:text-xl lg:text-2xl text-gray-500">
                        新人必备的应用，再也不用担心找不到应用了
                    </p>
                </div>
            </div>
            {/* 应用列表 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {appList.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-3 sm:gap-4 items-center justify-center rounded-lg shadow-md px-3 sm:px-4 py-6 sm:py-8 lg:py-10 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-6px] border border-gray-200 bg-background cursor-pointer"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="rounded-lg w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover"
                        />
                        <div className="flex flex-col gap-1 w-full min-w-0">
                            <h3 className="text-sm sm:text-base font-medium truncate text-center">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-gray-400">
                            <span>{item.size}</span>
                            <span>{item.message}</span>
                            <span>{item.version}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
