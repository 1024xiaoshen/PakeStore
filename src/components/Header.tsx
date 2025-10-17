'use client'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useUserStore from '@/store/user'
import useAppStore from '@/store/app'
import { useRouter } from 'next/navigation'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import {
    CircleCheckIcon,
    CircleHelpIcon,
    CircleIcon,
    GlobeIcon,
    MoonIcon,
    Search,
    SunIcon,
    UserIcon,
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from './ui/button'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { Input } from './ui/input'

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
]

export default function Header() {
    const userStore: any = useUserStore()
    const appStore: any = useAppStore()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        userStore.setUser(false)
        appStore.setApp(false)
        router.push('/login')
    }

    return (
        <header className="py-5 sticky top-0 z-50 shadow-md bg-background">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => router.push('/')}
                >
                    <Image
                        src="/store.webp"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="w-10 h-10"
                    />
                    <div className="ml-2">
                        <h1 className="font-bold">PakeStore</h1>
                        <p className="text-muted-foreground text-sm">
                            开源的应用商店
                        </p>
                    </div>
                    {/* search */}
                    {/* <Input
                    type="text"
                    placeholder="Search for app"
                    className="w-84 ml-4 border-1 "
                /> */}
                </div>
                <div className="flex items-center gap-4">
                    {/* menu items */}
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    首页
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mt-4 mb-2 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                        Beautifully designed
                                                        components built with
                                                        Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem
                                            href="/docs"
                                            title="Introduction"
                                        >
                                            Re-usable components built using
                                            Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/installation"
                                            title="Installation"
                                        >
                                            How to install dependencies and
                                            structure your app.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/primitives/typography"
                                            title="Typography"
                                        >
                                            Styles for headings, paragraphs,
                                            lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    电脑应用
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="/pc?type=Mac">
                                                    <div className="font-medium">
                                                        Mac
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        Browse all Mac apps
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="/pc?type=Windows">
                                                    <div className="font-medium">
                                                        Windows
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        Browse all Windows apps
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="/pc?type=Linux">
                                                    <div className="font-medium">
                                                        Linux
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        Browse all Linux apps
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    手机应用
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="/mobile?type=iOS">
                                                    <div className="font-medium">
                                                        iOS
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        Browse all iOS apps
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="/mobile?type=Android">
                                                    <div className="font-medium">
                                                        Android
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        Browse all Android apps
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            {/* <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    其他设备
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">智能家居</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">AI产品</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">AI工具</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    AI工具集
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center gap-2"
                                                >
                                                    <CircleHelpIcon />
                                                    Backlog
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center gap-2"
                                                >
                                                    <CircleIcon />
                                                    To Do
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center gap-2"
                                                >
                                                    <CircleCheckIcon />
                                                    Done
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem> */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    编程开发
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-md font-bold">
                                    博客文章
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {/* 搜索 */}
                    <Input
                        type="text"
                        placeholder="搜索应用"
                        className="w-64 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 transition-all duration-300 hover:scale-101"
                    />
                    {/* 主题切换 */}
                    <ThemeToggle />
                    {/* 多语言 */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild
                            className="cursor-pointer border-none outline-none hover:scale-110 transition-all duration-300 active:scale-95"
                        >
                            <span className="iconfont icon-zhongyingwenqiehuan_EN"></span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={5}>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">简体中文</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">繁体中文</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">English</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* 用户Icon */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild
                            className="cursor-pointer border-none outline-none"
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/56043599?v=4"
                                alt="User"
                                width={32}
                                height={32}
                                className="cursor-pointer rounded-full hover:scale-110 transition-all duration-300"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={5}>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">个人中心</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">仓库首页</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">退出登陆</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
