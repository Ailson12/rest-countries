import { RegionEnum } from "@/enums/RegionEnum";
import { create } from "zustand";

type State = {
  name: string;
  region: RegionEnum | null;
  setRegion(value: State["region"]): void;
  setName(value: State["name"]): void;
};

export const useCountryFilterStore = create<State>((set) => ({
  region: null,
  name: "",
  setName(value) {
    set({
      name: value,
    });
  },
  setRegion(value) {
    set({
      region: value,
    });
  },
}));
