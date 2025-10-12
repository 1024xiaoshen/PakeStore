import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from 'next-themes'

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
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
