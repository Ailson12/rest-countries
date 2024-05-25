import { ThemeEnum } from "@/enums/ThemeEnum";
import { create } from "zustand";

type State = {
  theme: ThemeEnum;
  setTheme(value: ThemeEnum): void;
};

export const useThemeStore = create<State>((set) => ({
  theme: ThemeEnum.DARK,
  setTheme(value) {
    set({
      theme: value,
    });
  },
}));
