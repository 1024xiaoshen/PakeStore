'use client'
import AppList from '@/components/AppList'
import AppGrid from '@/components/AppGrid'
import SideList from '@/components/SideList'
import AppPagination from '@/components/AppPagination'
import { GridIcon, ListIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { cn } from '@/lib/utils'

// 筛选标签
const filters = ['最新', '免费', '热门', '推荐', '评分', '下载量', '更新时间']

const SuspenseMobile = () => {
    const pageNum = 10
    const pageSize = 10 // 每页显示条数
    const [pageIndex, setPageIndex] = useState(1)
    // 获取url参数
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    // 布局
    const [layout, setLayout] = useState<'grid' | 'list'>('list')

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* left main */}
            <div className="w-full lg:w-4/5 min-w-0">
                {/* 顶部筛选条件 */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 py-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <h1 className="text-xl sm:text-2xl font-bold mr-2">
                            {type}软件
                        </h1>
                        {filters.map((filter) => (
                            <span
                                key={filter}
                                className="text-sm sm:text-base text-gray-500 hover:text-primary cursor-pointer transition-colors duration-300"
                            >
                                {filter}
                            </span>
                        ))}
                    </div>
                    {/* 布局切换 */}
                    <div className="flex items-center gap-2 text-gray-500">
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
                <div>{layout === 'grid' ? <AppGrid /> : <AppList />}</div>
                {/* 底部分页导航 */}
                <div className="py-6 sm:py-8">
                    <AppPagination
                        total={pageNum}
                        current={pageIndex}
                        onChange={setPageIndex}
                    />
                </div>
            </div>
            {/* right sidebar：移动端移至底部 */}
            <div className="w-full lg:w-1/5">
                {/* 顶部标题 */}
                <h1 className="text-xl sm:text-2xl font-bold py-4">软件推荐</h1>
                {/* 推荐列表 */}
                <SideList />
            </div>
        </div>
    )
}

export default function Mobile() {
    return (
        <Suspense>
            <SuspenseMobile />
        </Suspense>
    )
}
