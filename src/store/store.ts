import { create } from 'zustand'
import { UserStore } from './store.types'

export const useUser = create<UserStore>()((set) => ({
    isUser: false,
    id: null,
    login: (id: number) => set({ isUser: true, id }),
    logout: () => set({ isUser: false, id: null }),
}))