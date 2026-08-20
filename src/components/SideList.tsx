import Image from 'next/image'

export default function SideList() {
    const sideList = [
        {
            id: 1,
            title: 'SideList1',
            description: 'SideList1',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 2,
            title: 'SideList2',
            description: 'SideList2',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 3,
            title: 'SideList3',
            description: 'SideList3',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 4,
            title: 'SideList4',
            description: 'SideList4',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 5,
            title: 'SideList5',
            description: 'SideList5',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 6,
            title: 'SideList6',
            description: 'SideList6',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 7,
            title: 'SideList7',
            description: 'SideList7',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 8,
            title: 'SideList8',
            description: 'SideList8',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 9,
            title: 'SideList9',
            description: 'SideList9',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 10,
            title: 'SideList10',
            description: 'SideList10',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
        {
            id: 11,
            title: 'SideList11',
            description: 'SideList11',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
        },
    ]

    return (
        <div className="flex flex-col gap-2 bg-background p-2 rounded-lg shadow-md">
            {sideList.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-3 py-3 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 border-b border-gray-200 last:border-b-0 rounded-md transition-all duration-300 cursor-pointer"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="rounded-md w-10 h-10 object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                        <h3 className="text-sm font-medium truncate">
                            {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 truncate">
                            打包网页/Vue/React
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
