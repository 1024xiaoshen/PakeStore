'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'

export default function Detail() {
    return (
        <Suspense>
            <DetailPage />
        </Suspense>
    )
}

const DetailPage = () => {
    // 获取url参数
    const searchParams = useSearchParams()
    const id = searchParams.get('id') || '1'

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4">
            {/* 头部 */}
            <div className="flex justify-center items-center gap-40 my-16">
                {/* 左侧标题和描述 */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                        PakePlus
                    </h1>
                    <h2 className="text-4xl font-bold">
                        何必是网站，秒变桌面应用和手机应用
                    </h2>
                    <p className="text-2xl">
                        打包网页/Vue/React项目为桌面/手机应用只需几分钟
                    </p>
                    {/* 按钮 */}
                    <div className="flex gap-4">
                        <Button className="bg-blue-500 text-white" size="lg">
                            Mac
                        </Button>
                        <Button className="bg-blue-500 text-white" size="lg">
                            Windows
                        </Button>
                        <Button className="bg-blue-500 text-white" size="lg">
                            Linux
                        </Button>
                        <Button className="bg-blue-500 text-white" size="lg">
                            iOS
                        </Button>
                        <Button className="bg-blue-500 text-white" size="lg">
                            Android
                        </Button>
                    </div>
                </div>
                {/* 右侧图片 */}
                <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
                    <Image
                        src={'https://cdn.macwk.com/images/1752052438053.png'}
                        alt="1"
                        width={150}
                        height={150}
                        className="rounded-lg"
                    />
                </div>
            </div>
            {/* 特色 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-4">
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-gray-200 select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🎨</span>
                    <div className="">支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-gray-200 select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🎨</span>
                    <div>支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-gray-200 select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🎨</span>
                    <div>支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
            </div>
        </div>
    )
}
