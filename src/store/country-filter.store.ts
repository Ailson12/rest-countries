import { create } from "zustand";

type State = {
  region: string | null
  setRegion(value: State['region']): void
}

export const useCountryFilterStore = create<State>((set) => ({
  region: null,
  setRegion(value) {
    set({
      region: value
    })
  },
}))