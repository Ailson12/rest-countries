import { ThemeEnum } from "@/enums/ThemeEnum";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  theme: ThemeEnum;
  setTheme(value: ThemeEnum): void;
};

export const useThemeStore = create(
  persist<State>((set) => ({
    theme: ThemeEnum.DARK,
    setTheme(value) {
      set({
        theme: value,
      });
    },
  }), {
    name: 'theme-country'
  })
);
