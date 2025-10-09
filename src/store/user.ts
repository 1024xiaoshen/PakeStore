import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const useUserStore = create(
    // 使用 devtools 包裹
    devtools(
        // 使用 persist 包裹
        persist(
            (set) => ({
                user: false,
                setUser: (user: boolean) => set({ user }),
                status: 'loading' as 'loading' | 'success' | 'error',
                setStatus: (status: 'loading' | 'success' | 'error') =>
                    set({ status }),
            }),
            {
                // persist 的配置
                name: 'user-store', // localStorage 中的 key
                // storage: createJSONStorage(() => sessionStorage), // 可以指定 storage 类型
            }
        ),
        {
            // devtools 的配置
            name: 'UserStore', // DevTools 中显示的名称
        }
    )
)

export default useUserStore
