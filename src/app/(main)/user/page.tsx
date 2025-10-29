'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function UserPage() {
    const menuList = [
        {
            title: '个人中心',
            value: '个人中心',
            index: 0,
        },
        {
            title: '我的收藏',
            value: '我的收藏',
            index: 1,
        },
        {
            title: '我的评论',
            value: '我的评论',
            index: 2,
        },
        {
            title: '我的点赞',
            value: '我的点赞',
            index: 3,
        },
        {
            title: '我的关注',
            value: '我的关注',
            index: 4,
        },
        {
            title: '提交应用',
            value: '提交应用',
            index: 5,
        },
    ]

    const [active, setActive] = useState(0)

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 flex gap-3 sm:gap-4 md:gap-6">
            {/* 左侧导航 */}
            <div className="flex flex-col gap-2 w-64 h-200 bg-background rounded-lg p-4">
                {/* <Button
                    variant="default"
                    className="w-full h-10 text-md bg-blue-500 hover:bg-blue-600"
                >
                    提交应用
                </Button> */}
                {/* 菜单列表 */}
                <div className="col-span-1 lg:col-span-3">
                    {menuList.map((item) => (
                        <div
                            key={item.value}
                            className={`w-full h-10 text-md hover:bg-blue-100 rounded-md transition-transform duration-300 cursor-pointer text-center items-center justify-center flex active:scale-95 ${
                                active === item.index
                                    ? 'bg-blue-200 text-blue-600 font-bold'
                                    : ''
                            }`}
                            onClick={() => setActive(item.index)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            {/* 右侧内容 */}
            <div className="col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-bold">我的收藏</h1>
            </div>
        </div>
    )
}
