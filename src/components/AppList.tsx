import Image from 'next/image'
import { Button } from './ui/button'

export default function AppList() {
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
        {
            id: 21,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 22,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
        },
        {
            id: 23,
            title: '标题',
            description: '描述',
            image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
            size: '100MB',
            message: '100',
            version: '1.0.0',
            updateTime: '2021-01-01',
            detail: '详情',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-2 bg-background">
                {/* 列表 */}
                {appList.map((item) => (
                    <div className="flex justify-between gap-2 py-4 hover:bg-secondary">
                        <Image
                            src="https://avatars.githubusercontent.com/u/56043599?v=4"
                            alt="User"
                            width={32}
                            height={32}
                            className="cursor-pointer rounded-full"
                        />
                        {/* 标题 */}
                        <div>
                            <h1>标题</h1>
                        </div>
                        {/* 描述 */}
                        <div>
                            <p>描述</p>
                        </div>
                        {/* 体积 */}
                        <div>
                            <p>体积</p>
                        </div>
                        {/* 留言 */}
                        <div>
                            <p>留言</p>
                        </div>
                        {/* 版本 */}
                        <div>
                            <p>版本</p>
                        </div>
                        {/* 更新时间 */}
                        <div>
                            <p>更新时间</p>
                        </div>
                        {/* 详情 */}
                        <div>
                            <p>详情</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
