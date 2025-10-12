// hooks/useSysTheme.ts
'use client'
import { useState, useEffect } from 'react'

export function useSysTheme() {
    const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')
    useEffect(() => {
        // 检测系统主题
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        // 初始检测
        setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
        // 监听系统主题变化
        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? 'dark' : 'light')
        }
        mediaQuery.addEventListener('change', handleChange)
        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])
    return systemTheme
}
