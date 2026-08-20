'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Locale = 'zh-cn' | 'zh-tw' | 'en'

interface LocaleState {
    locale: Locale
    setLocale: (locale: Locale) => void
}

// 当前语言状态，自动持久化到 localStorage
const useLocaleStore = create<LocaleState>()(
    persist(
        (set) => ({
            locale: 'zh-cn',
            setLocale: (locale) => set({ locale }),
        }),
        { name: 'pakestore-locale' }
    )
)

export default useLocaleStore
