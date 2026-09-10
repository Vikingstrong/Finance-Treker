import { create } from 'zustand'

type ThemeType = {
    theme: string,
    switchTheme: (selectedTheme: string) => void
}

const initialTheme = localStorage.getItem('theme') || 'dark'

export const useTheme = create<ThemeType>((set) => ({
    theme: initialTheme,
    switchTheme: (selectedTheme) => {
      localStorage.setItem('theme', selectedTheme)
      set({ theme: selectedTheme })
    },
}))