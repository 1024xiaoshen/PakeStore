'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ImgBlur from '@/components/ui/imgblur'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function Detail() {
    return (
        <Suspense>
            <DetailPage />
        </Suspense>
    )
}

const DetailPage = () => {
    // 获取url参数
    const searchParams = useSearchParams()
    const id = searchParams.get('id') || '1'

    const markdownContent = `
-   🎐 体积比 Electron 包小约 20 倍（小于 5M！），性能快 10 倍  
-   🚀 基于 Rust Tauri，PakePlus 比基于 JS 的框架更轻量、更快
-   📦 内置丰富功能包——支持快捷方式、沉浸式窗口、极简自定义
-   👻 PakePlus 只是一个极简的软件，用 Tauri 替代旧的打包方式，支持跨平台桌面
-   📲 使用原生框架打包 Android 和 iOS APP，比 Tauri2 体积更小更快
-   🤗 UI 操作简单，不用在本地安装任何开发环境，省时省心省硬盘空间
-   🌹 不需要在本地安装任何复杂的依赖环境，使用 Github Action 云端自动打包
-   🧑‍🤝‍🧑 支持国际化，对全球用户都非常友好，并且会自动跟随你的电脑系统语言
-   💡 支持自定义 js 注入。你可以编写自己的 js 代码注入到页面中
-   🎨 ui 界面更美观更友好对新手更实用，使用更舒适，支持中文名称打包
-   📡 支持网页端直接使用，但是客户端功能更强大，更推荐客户端
-   🔐 数据安全，你的 token 仅保存在你本地，不会上传服务器，你的项目也都在你自己的 git 中安全存储
-   🍔 支持本地打包，而且不需要安装任何依赖环境，本地打包仅需 30 秒，不限制文件数量和大小
-   🥥 没有 Github Token 没关系，本地打包即简单又方便，还不需要 Token，而且速度快
-   ⚔️ 支持在 JS 脚本中调用系统级 API，例如下载文件/执行命令/打开新窗口等，前端变全端
-   🍀 支持静态文件打包，将 Vue/React 等项目编译后的 dist 目录或者 index.html 丢进来即可成为客户端，何必是网站
-   🐞 支持 debug 调试模式，无论是预览阶段还是发布阶段，都可以找到 bug 并消灭 bug
-   💬 如果在你使用过程中遇到问题，随时可以加入我们的技术交流群咨询

# PakePlus 简介

PakePlus 是一个基于 Tauri2 和 Github 的打包工具，你也可以叫我 PP 或者 2P🫣，可以将任意网站/Vue/React 等项目的 dist 静态文件打包为跨平台桌面软件和手机软件，体积小巧(小于 5M)并且性能还高，而且 PakePlus 本身也才仅仅 8M 左右。  
<span style="color:red">
**注意：**
现阶段避免大量使用导致 Github 服务器压力过大，PakePlus 已做限制：仅可创建 3 个项目，每小时可发布一次！详细原因请看：[PakePlus 为什么要做限制？](https://juejin.cn/post/7504461472237404214)  
PakePlus 仅作为打包工具使用，不支持软件签名，打包后的软件仅限自己使用，请勿传播或商业用途，否则后果自负。
</span>
    `

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4">
            {/* 头部 */}
            <div className="flex justify-center items-center gap-40 my-16">
                {/* 左侧标题和描述 */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                        PakePlus
                    </h1>
                    <h2 className="text-4xl font-bold">
                        何必是网站，秒变桌面应用和手机应用
                    </h2>
                    <p className="text-2xl">
                        打包网页/Vue/React项目为桌面/手机应用只需几分钟
                    </p>
                    {/* 按钮 */}
                    <div className="flex gap-4">
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:scale-95"
                            size="lg"
                        >
                            Mac
                        </Button>
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:scale-95"
                            size="lg"
                        >
                            Windows
                        </Button>
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:scale-95"
                            size="lg"
                        >
                            Linux
                        </Button>
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:scale-95"
                            size="lg"
                        >
                            iOS
                        </Button>
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:scale-95"
                            size="lg"
                        >
                            Android
                        </Button>
                    </div>
                </div>
                {/* 右侧图片 */}
                <ImgBlur
                    src="https://web.pakeplus.com/assets/pakeplus-Cl_cn6fO.png"
                    alt="1"
                    width={150}
                    height={150}
                />
            </div>
            {/* 特色 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-4">
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-background select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🎨</span>
                    <div className="">支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-background select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🌍</span>
                    <div>支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-xl text-xl font-bold bg-background select-none shadow-lg text-center p-10 gap-3">
                    <span className="text-4xl">🌈</span>
                    <div>支持多种语言</div>
                    <div className="text-base text-start text-gray-500">
                        PakePlus 是开源免费的，你可以在 GitHub 上找到它的源代码
                    </div>
                </div>
            </div>
            {/* 描述 */}
            <div className="flex flex-col items-start justify-start gap-4 mt-10">
                <h2 className="text-2xl font-bold">描述</h2>
                <MarkdownRenderer content={markdownContent} />
            </div>
            {/* 其他信息 */}
            <div className="flex flex-col gap-4 my-5 border border-gray-200 rounded-lg p-4 bg-background">
                <h1 className="text-2xl font-bold borde-b border-gray-500 py-2">
                    其他信息
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="">
                        <div>发布者</div>
                        <div>1024小神</div>
                    </div>
                    <div>
                        <div>发布时间</div>
                        <div>2025-01-01</div>
                    </div>
                    <div>
                        <div>版本</div>
                        <div>1.0.0</div>
                    </div>
                    <div>
                        <div>体积大小</div>
                        <div>100MB</div>
                    </div>
                    <div>
                        <div>留言</div>
                        <div>100</div>
                    </div>
                    <div>
                        <div>更新时间</div>
                        <div>2025-01-01</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
