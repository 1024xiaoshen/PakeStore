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
                    className="flex items-center gap-2 py-4 px-2 hover:bg-gray-100 border-b border-gray-200 transition-all duration-300 cursor-pointer hover:scale-102 hover:rounded-md hover:shadow-md"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md w-10 h-10 min-w-10 min-h-10"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-sm">{item.title}</h1>
                        <p className="text-sm text-gray-500">
                            打包网页/Vue/React打包网页/Vue/React
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
