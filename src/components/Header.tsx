'use client'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
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
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Search, MenuIcon } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from './ui/button'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { Input } from './ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

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

    const handleLogout = () => {
        userStore.setUser(false)
        appStore.setApp(false)
        router.push('/login')
    }

    return (
        <header className="py-4 sticky top-0 z-50 shadow-md bg-background">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo Section */}
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
                        <p className="text-muted-foreground text-sm hidden sm:block">
                            开源应用商店
                        </p>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
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
                                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md cursor-pointer transition-all duration-300"
                                                        href="/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <div className="mt-4 mb-2 text-lg font-medium">
                                                            PakePlus
                                                        </div>
                                                        <p className="text-muted-foreground text-sm leading-tight">
                                                            打包网页/Vue/React项目为桌面/手机应用只需几分钟
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem
                                                href="https://pakeplus.com/"
                                                title="PakePlus"
                                            >
                                                打包网页/Vue/React项目为桌面/手机应用只需几分钟
                                            </ListItem>
                                            <ListItem
                                                href="/docs/installation"
                                                title="TauriHub"
                                            >
                                                How to install dependencies and
                                                structure your app.
                                            </ListItem>
                                            <ListItem
                                                href="/docs/primitives/typography"
                                                title="OpenPake"
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
                                                            苹果电脑应用
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/pc?type=Windows">
                                                        <div className="font-medium">
                                                            Windows
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            微软电脑应用
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/pc?type=Linux">
                                                        <div className="font-medium">
                                                            Linux
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            ubuntu电脑应用
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
                                                    <Link href="/phone?type=iOS">
                                                        <div className="font-medium">
                                                            iOS
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            苹果手机和ipad应用
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/phone?type=Android">
                                                        <div className="font-medium">
                                                            Android
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            安卓手机和平板应用
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/phone?type=Android">
                                                        <div className="font-medium">
                                                            小程序
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            微信小程序抖音小程序等
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-md font-bold">
                                        网站博客
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/phone?type=iOS">
                                                        <div className="font-medium">
                                                            网站推荐
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            网站推荐分享
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/phone?type=iOS">
                                                        <div className="font-medium">
                                                            技术分享
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            前沿技术分享
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/phone?type=Android">
                                                        <div className="font-medium">
                                                            生活经验
                                                        </div>
                                                        <div className="text-muted-foreground">
                                                            生活经验交流
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex">
                        <Input
                            type="text"
                            placeholder="搜索应用"
                            className="w-64 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 transition-all duration-300 hover:scale-101"
                        />
                    </div>

                    {/* Search Icon - Mobile */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Search className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <div className="p-2">
                                    <Input
                                        type="text"
                                        placeholder="搜索应用"
                                        className="w-full"
                                    />
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Language Selector */}
                    <div className="hidden sm:block">
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
                    </div>

                    {/* User Menu */}
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
                            <DropdownMenuItem
                                className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300"
                                onClick={() => router.push('/user')}
                            >
                                <div className="px-2 py-2">个人中心</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300">
                                <div className="px-2 py-2">我的收藏</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer border-none outline-none hover:bg-gray-100 rounded-md transition-all duration-300"
                                onClick={handleLogout}
                            >
                                <div className="px-2 py-2">退出登陆</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MenuIcon className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 sm:w-96">
                                <div className="flex flex-col h-full">
                                    {/* Mobile Navigation */}
                                    <div className="flex-1 py-6">
                                        <nav className="grid gap-6">
                                            <MobileNavItem
                                                title="首页"
                                                href="/"
                                            />
                                            <MobileNavSection title="电脑应用">
                                                <MobileNavItem
                                                    title="Mac"
                                                    href="/pc?type=Mac"
                                                />
                                                <MobileNavItem
                                                    title="Windows"
                                                    href="/pc?type=Windows"
                                                />
                                                <MobileNavItem
                                                    title="Linux"
                                                    href="/pc?type=Linux"
                                                />
                                            </MobileNavSection>
                                            <MobileNavSection title="手机应用">
                                                <MobileNavItem
                                                    title="iOS"
                                                    href="/mobile?type=iOS"
                                                />
                                                <MobileNavItem
                                                    title="Android"
                                                    href="/mobile?type=Android"
                                                />
                                            </MobileNavSection>
                                            <MobileNavSection title="博客文章">
                                                <MobileNavItem
                                                    title="技术分享"
                                                    href="/blog/tech"
                                                />
                                                <MobileNavItem
                                                    title="生活经验"
                                                    href="/blog/life"
                                                />
                                            </MobileNavSection>
                                        </nav>
                                    </div>

                                    {/* Mobile Search */}
                                    <div className="p-4 border-t">
                                        <Input
                                            type="text"
                                            placeholder="搜索应用"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

// Mobile Navigation Components
function MobileNavItem({ title, href }: { title: string; href: string }) {
    return (
        <Link
            href={href}
            className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
            {title}
        </Link>
    )
}

function MobileNavSection({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="grid gap-2">
            <div className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {title}
            </div>
            {children}
        </div>
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
                <Link href={href} target="_blank" rel="noopener noreferrer">
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
