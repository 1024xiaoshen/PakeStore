'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

type PageItem = number | 'ellipsis-l' | 'ellipsis-r'

// 生成带省略号的页码序列，如 total=10 current=5 => [1, '…', 4, 5, 6, '…', 10]
function getPageItems(total: number, current: number): PageItem[] {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }
    const items: PageItem[] = [1]
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    if (start > 2) items.push('ellipsis-l')
    for (let i = start; i <= end; i++) items.push(i)
    if (end < total - 1) items.push('ellipsis-r')
    items.push(total)
    return items
}

export default function AppPagination({
    total,
    current,
    onChange,
}: {
    total: number
    current: number
    onChange: (page: number) => void
}) {
    return (
        <Pagination className="mx-0">
            <PaginationContent className="flex-wrap sm:flex-nowrap justify-center gap-1.5 sm:gap-2">
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        className="text-sm sm:text-base cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            onChange(Math.max(1, current - 1))
                        }}
                    />
                </PaginationItem>
                {getPageItems(total, current).map((item, index) =>
                    typeof item === 'number' ? (
                        <PaginationItem key={item}>
                            <PaginationLink
                                href="#"
                                isActive={item === current}
                                onClick={(e) => {
                                    e.preventDefault()
                                    onChange(item)
                                }}
                                className={cn(
                                    'cursor-pointer w-9 h-9 sm:w-11 sm:h-11 text-sm sm:text-base flex items-center justify-center rounded-full transition-all duration-300 hover:border-blue-500 hover:text-blue-500 active:scale-95',
                                    item === current
                                        ? 'border-blue-500 text-blue-500'
                                        : 'border border-gray-200'
                                )}
                            >
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={`${item}-${index}`}>
                            <PaginationEllipsis className="w-9 h-9 sm:w-11 sm:h-11" />
                        </PaginationItem>
                    )
                )}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        className="text-sm sm:text-base cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            onChange(Math.min(total, current + 1))
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
