import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import '@/assets/fonts/iconfont.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
// import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
// import { AppSidebar } from '@/components/AppSidebar'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'PakeStore',
    description: 'Your creativity should be discovered，你的创意应该被发现',
    keywords: ['创意', '发现', '创作', '平台'],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider attribute="class">
                    <Header />
                    <div className="px-20">{children}</div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
