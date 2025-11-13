import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { seedProfiles } from '../data/seed'

export const useProfiles = create(
  persist(
    (set, get) => ({
      profiles: seedProfiles,
      search: '',
      cityFilter: 'All',
      hydrated: false,

      add: (p) => {
        const updated = [...get().profiles, p]
        set({ profiles: updated })
      },

      update: (id, data) => {
        const updated = get().profiles.map(x =>
          x.id === id ? { ...x, ...data } : x
        )
        set({ profiles: updated })
      },

      remove: (id) => {
        const updated = get().profiles.filter(x => x.id !== id)
        set({ profiles: updated })
      },

      setSearch: (v) => set({ search: v }),
      setCityFilter: (v) => set({ cityFilter: v }),

      reset: () => set({ profiles: seedProfiles }),

      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: 'bynry-profiles',

      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error(' Rehydration failed:', error)
        }
        if (!state?.profiles || state.profiles.length === 0) {
          set({ profiles: seedProfiles })
        }
        set({ hydrated: true })
      },
    }
  )
)
