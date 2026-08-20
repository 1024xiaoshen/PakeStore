export interface AppItem {
    id: number
    title: string
    description: string
    image: string
    size: string
    message: string
    version: string
    updateTime: string
    detail: string
}

// 列表 mock 数据，AppGrid / AppList 共用
export const appList: AppItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: '标题',
    description: '打包网页/Vue/React项目为桌面/手机应用',
    image: 'https://avatars.githubusercontent.com/u/56043599?v=4',
    size: '100MB',
    message: '100',
    version: '1.0.0',
    updateTime: '2021-01-01',
    detail: '详情',
}))
