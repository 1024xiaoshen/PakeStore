'use client'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'

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

    // 列表数据
    const appList = [
        {
            id: 1,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 2,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 3,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 4,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 5,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 6,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 7,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 8,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 9,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 10,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 11,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 12,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 13,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 14,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 15,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 16,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 17,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 18,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 19,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 20,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
    ]

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 pb-20">
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
                </div>
            </div>
            {/* 应用列表 */}
            <div className="grid grid-cols-5 gap-5">
                {appList.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-4 items-center justify-center rounded-lg shadow-md px-4 py-10 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-6px] border border-gray-200 bg-background cursor-pointer"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={100}
                            height={100}
                            className="rounded-md"
                        />
                        <div className="flex flex-col gap-2">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>{item.size}</p>
                            <p>{item.message}</p>
                            <p>{item.version}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
