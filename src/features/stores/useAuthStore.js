import { persist } from 'zustand/middleware'
import { create } from 'zustand'

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,

            setSession: ({ user, token }) => set({ user, token }),
            setUser: ({user}) => set({ user }),
            logout: () => set({ user: null, token: null }),
        }),
        {
            name: 'demo-session-auth',
            partialize: (state) => ({ user: state.user, token: state.token }),
        },
    ),
)