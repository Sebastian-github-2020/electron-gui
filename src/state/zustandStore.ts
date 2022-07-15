import create from "zustand";

// 创建store
const useStore = create((set) => ({
    token: "123",
    login: (payload: string) => set({token: payload}),
    logout: () => set({token: ""})
}))

export default useStore