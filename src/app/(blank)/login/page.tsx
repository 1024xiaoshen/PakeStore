'use client'
import useAppStore from '@/store/app'
import useUserStore from '@/store/user'

export default function Login() {
    const userStore: any = useUserStore()
    const appStore: any = useAppStore()

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        userStore.setUser(true)
        appStore.setApp(true)
    }

    return (
        <div>
            <h1>登录</h1>
            <form>
                <input type="text" placeholder="用户名" />
                <input type="password" placeholder="密码" />
                <button type="submit" onClick={handleSubmit}>
                    登录
                </button>
            </form>
        </div>
    )
}
