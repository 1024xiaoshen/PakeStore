'use client'
import Image from 'next/image'

export default function AppGrid() {
    // 列表数据
    const appList = [
        {
            id: 1,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 2,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 3,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 4,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 5,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 6,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 7,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 8,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 9,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 10,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 11,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 12,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 13,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 14,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 15,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
        {
            id: 16,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 17,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 18,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 19,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 20,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
    ]

    return (
        <div className="grid grid-cols-5 gap-5">
            {appList.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-4 items-center justify-center rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-6px]"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                    />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{item.size}</p>
                        <p>{item.message}</p>
                        <p>{item.version}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
