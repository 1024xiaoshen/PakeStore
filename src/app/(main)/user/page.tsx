'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'

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
            <div className="flex flex-col gap-2 w-64 h-200 bg-background rounded-lg p-4 shadow-md">
                {/* 菜单列表 */}
                <div className="flex flex-col gap-2">
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
            <div className="bg-background shadow-md w-full rounded-lg">
                {/* 个人中心 */}
                {active === 0 && (
                    <div className="p-4 w-full flex flex-col gap-4">
                        {/* 用户信息 */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://avatars.githubusercontent.com/u/56043599?v=4"
                                alt="User"
                                width={64}
                                height={64}
                                className="rounded-full w-16 h-16"
                            />
                            <div className="flex flex-col gap-2">
                                <div className="text-2xl font-bold">
                                    1024小神
                                </div>
                                <div className="text-sm text-gray-500 flex items-center gap-2">
                                    <span>
                                        <span className="text-primary font-bold">
                                            505
                                        </span>
                                        <span className="pl-1">粉丝</span>
                                    </span>
                                    <span>
                                        <span className="text-primary font-bold">
                                            17
                                        </span>
                                        <span className="pl-1">关注</span>
                                    </span>
                                    <span>
                                        <span className="text-primary font-bold">
                                            10620
                                        </span>
                                        <span className="pl-1">积分</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* 其他信息 */}
                        <div className="flex flex-col gap-2">
                            事实上，我之前一直无视这个问题，因为 dev、uat
                            环境之前已经配了 Cache-Control: no-cache, no-store,
                            must-revalidate，所以没发现。
                            而且好几次上线都能拿到最新的，没想到第三次的时候，突然来这样子搞，一时不察。
                            先定位原因，直接上抓包工具，这里我用的是 appStore 的
                            Stream，去下载，这个好用 为啥没有安卓的，因为安卓抓
                            https 的包，需要 root
                            权限，我实在没有安卓手机，也没法推荐了，抱歉
                            我一抓包，一看，完全没有 js、css 的请求，只有
                            html，我就知道了，微信缓存。
                            立刻找同事，让它清除缓存看看，成功！
                            好了，可以开始拉会议对接这个问题了，叭叭叭跟相关人员讲了一堆，运维说：“啊，没想到微信缓存那么久的？”
                        </div>
                    </div>
                )}
                {/* 我的收藏 */}
                {active === 1 && <div className="p-4 w-full">我的收藏</div>}
                {/* 我的评论 */}
                {active === 2 && <div className="p-4 w-full">我的评论</div>}
                {/* 我的点赞 */}
                {active === 3 && <div className="p-4 w-full">我的点赞</div>}
                {/* 我的关注 */}
                {active === 4 && <div className="p-4 w-full">我的关注</div>}
                {/* 提交应用 */}
                {active === 5 && <div className="p-4 w-full">提交应用</div>}
            </div>
        </div>
    )
}
