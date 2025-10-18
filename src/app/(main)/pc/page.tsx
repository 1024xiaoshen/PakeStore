'use client'
import AppList from '@/components/AppList'
import AppGrid from '@/components/AppGrid'
import SideList from '@/components/SideList'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { GridIcon, ListIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { cn } from '@/lib/utils'

const SuspensePC = () => {
    const pageNum = 10
    const pageSize = 10 // 每页显示条数
    const [pageIndex, setPageIndex] = useState(1)
    // 获取url参数
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    // 布局
    const [layout, setLayout] = useState<'grid' | 'list'>('list')

    return (
        <div className="container mx-auto px-4 md:px-6 flex gap-4">
            {/* left main */}
            <div className="w-4/5">
                {/* 顶部筛选条件 */}
                <div className="flex justify-between py-4">
                    <div className="flex items-end gap-4">
                        <h1 className="text-2xl font-bold">{type}软件</h1>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            最新
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            免费
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            热门
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            推荐
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            评分
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            下载量
                        </span>
                        <span className="text-md text-gray-500 hover:text-primary cursor-pointer">
                            更新时间
                        </span>
                    </div>
                    {/* 布局 */}
                    <div className="flex items-end gap-2 text-gray-500">
                        <ListIcon
                            className={`hover:text-primary cursor-pointer ${
                                layout === 'list' ? 'text-primary' : ''
                            }`}
                            onClick={() => setLayout('list')}
                        />
                        <GridIcon
                            className={`hover:text-primary cursor-pointer ${
                                layout === 'grid' ? 'text-primary' : ''
                            }`}
                            onClick={() => setLayout('grid')}
                        />
                    </div>
                </div>
                {/* 中间展示列表 */}
                <div className="">
                    {layout === 'grid' ? <AppGrid /> : <AppList />}
                </div>
                {/* 底部分页导航 */}
                <div className="py-8 text-2xl">
                    <Pagination>
                        <PaginationContent className="flex gap-4">
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    className="hover:text-blue-500 text-lg"
                                />
                            </PaginationItem>
                            {Array.from({ length: pageNum }).map((_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        onClick={() => setPageIndex(index + 1)}
                                        className={cn(
                                            'text-lg border border-gray-200 rounded-full p-4 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95',
                                            index + 1 === pageIndex
                                                ? 'border-blue-500 text-blue-500'
                                                : ''
                                        )}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    className="hover:text-blue-500 text-lg"
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
            {/* right sidebar */}
            <div className="w-1/5">
                {/* 顶部标题 */}
                <h1 className="text-2xl font-bold py-4">软件推荐</h1>
                {/* 推荐列表 */}
                <SideList />
            </div>
        </div>
    )
}

export default function PC() {
    return (
        <Suspense>
            <SuspensePC />
        </Suspense>
    )
}
