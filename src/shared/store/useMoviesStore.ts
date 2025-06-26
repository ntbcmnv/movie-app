import { create } from 'zustand'

interface MovieStore {
    fromPage: number
    setFromPage: (page: number) => void
}

export const useMoviesStore = create<MovieStore>((set) => ({
    fromPage: 1,
    setFromPage: (page) => set({ fromPage: page }),
}))