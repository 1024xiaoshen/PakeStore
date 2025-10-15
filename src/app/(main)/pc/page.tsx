import AppList from '@/components/AppList'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function PC() {
    return (
        <>
            <div className="container mx-auto px-4 md:px-6 flex gap-4">
                {/* left main */}
                <div className="w-4/5">
                    {/* 顶部筛选条件 */}
                    <div className="flex items-center gap-2 py-4">
                        <h1 className="text-2xl font-bold">PC电脑软件</h1>
                        <span className="text-sm text-gray-500">最新</span>
                        <span className="text-sm text-gray-500">免费</span>
                        <span className="text-sm text-gray-500">热门</span>
                        <span className="text-sm text-gray-500">推荐</span>
                        <span className="text-sm text-gray-500">评分</span>
                        <span className="text-sm text-gray-500">下载量</span>
                        <span className="text-sm text-gray-500">更新时间</span>
                    </div>
                    {/* 中间展示列表 */}
                    <div className="">
                        <AppList />
                    </div>
                    {/* 底部分页导航 */}
                    <div className="">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
                {/* right sidebar */}
                <div className="w-1/5">
                    {/* 顶部标题 */}
                    <h1 className="text-2xl font-bold">PC软件推荐</h1>
                    {/* 推荐列表 */}
                    <div className="">推荐列表</div>
                </div>
            </div>
        </>
    )
}
