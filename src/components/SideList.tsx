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
        <div className="flex flex-col gap-2 bg-background p-4 rounded-lg shadow-md">
            {sideList.map((item) => (
                <div
                    key={item.id}
                    className="flex gap-2 py-4 px-4 hover:bg-gray-200 border-b border-gray-200 rounded-md transition-all duration-300"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="rounded-md"
                    />
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}
