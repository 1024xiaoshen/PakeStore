'use client'
import useUserStore from '@/store/user'

export default function Login() {
    const userStore: any = useUserStore()

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        userStore.setUser(true)
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
