'use client'
import useAppStore from '@/store/app'
import useUserStore from '@/store/user'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const userStore: any = useUserStore()
    const appStore: any = useAppStore()
    const router = useRouter()
    const [active, setActive] = useState(false)

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     userStore.setUser(true)
    //     appStore.setApp(true)
    //     setActive(true)
    // }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // 这里可以添加登录逻辑
        setTimeout(() => setLoading(false), 1000)
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
                <div className="flex flex-col items-center">
                    <img src="/store.webp" alt="Logo" className="h-16 mb-2" />
                    <h1 className="text-2xl font-bold text-blue-600 mb-2">
                        PakeStore
                    </h1>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-400 focus:border-blue-300"
                        placeholder="请输入邮箱"
                    />
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-400 focus:border-blue-300"
                        placeholder="请输入密码"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-200"
                    >
                        {loading ? '登陆中...' : '登 录'}
                    </button>
                </form>
                <div className="flex justify-between items-center text-sm">
                    <a href="#" className="text-blue-500 hover:underline">
                        忘记密码？
                    </a>
                    <a
                        href="/register"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        注册新账号
                    </a>
                </div>
            </div>
        </div>
    )
}
