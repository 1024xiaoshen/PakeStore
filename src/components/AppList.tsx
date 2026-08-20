import Image from 'next/image'
import { appList } from '@/lib/appData'

export default function AppList() {
    return (
        <div className="flex flex-col bg-background px-3 sm:px-4 py-2 shadow-md rounded-lg">
            {/* 列表 */}
            {appList.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-200 last:border-b-0 rounded-md transition-all duration-300"
                >
                    {/* 主信息：图标 + 标题 + 描述，各端始终显示 */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={56}
                            height={56}
                            className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col items-start justify-center min-w-0 gap-0.5">
                            <h3 className="text-sm sm:text-base font-medium truncate max-w-full">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 truncate max-w-full">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    {/* 附加信息列：平板及以上显示，移动端隐藏避免挤压 */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm text-gray-500 flex-shrink-0">
                        <span className="w-16 text-center">{item.size}</span>
                        <span className="w-16 text-center">{item.message}</span>
                        <span className="w-16 text-center">{item.version}</span>
                        <span className="w-24 text-center">
                            {item.updateTime}
                        </span>
                        <span className="w-16 text-center text-primary cursor-pointer">
                            详情
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
