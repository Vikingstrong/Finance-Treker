import { supabase } from "@/lib/supbase";
import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthState{
    user: User | null
    isLoading: boolean
    setUser: (user:User|null) => void
    init: () => void
}


export const useAuth = create<AuthState>((set) => ({
    user: null,
    isLoading: false,
    setUser: (user) => set({user}),
    init: () => {
        supabase.auth.getSession().then(({ data: {session} }) => {
            set({user: session?.user, isLoading: false})
        }),
        supabase.auth.onAuthStateChange((_event, session) => {
            set({user: session?.user})
        })
    }
}))