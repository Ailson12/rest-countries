import { RegionEnum } from "@/enums/RegionEnum";
import { create } from "zustand";

type State = {
  region: RegionEnum | null
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