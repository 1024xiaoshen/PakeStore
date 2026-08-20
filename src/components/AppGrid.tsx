'use client'
import Image from 'next/image'
import { appList } from '@/lib/appData'

export default function AppGrid() {
    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {appList.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-2 sm:gap-3 rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-6px] border border-gray-200 bg-background cursor-pointer"
                >
                    <div className="flex justify-center">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="rounded-lg w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
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
    )
}
