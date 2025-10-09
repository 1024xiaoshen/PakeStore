import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const useAppStore = create(
    // 使用 devtools 包裹
    devtools(
        // 使用 persist 包裹
        persist(
            (set) => ({
                app: false,
                setApp: (app: boolean) => set({ app }),
            }),
            {
                // persist 的配置
                name: 'app-store', // localStorage 中的 key
                // storage: createJSONStorage(() => sessionStorage), // 可以指定 storage 类型
            }
        ),
        {
            // devtools 的配置
            name: 'AppStore', // DevTools 中显示的名称
        }
    )
)

export default useAppStore
