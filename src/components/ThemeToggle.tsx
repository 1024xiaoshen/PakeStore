'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-6 h-6">
                <SunIcon size={24} />
            </div>
        )
    }

    return (
        <>
            {theme === 'light' ? (
                <MoonIcon
                    className="cursor-pointer hover:scale-110 transition-all duration-300 active:scale-95"
                    size={24}
                    onClick={() => setTheme('dark')}
                />
            ) : (
                <SunIcon
                    className="cursor-pointer hover:scale-110 transition-all duration-300 active:scale-95"
                    size={24}
                    onClick={() => setTheme('light')}
                />
            )}
        </>
    )
}
