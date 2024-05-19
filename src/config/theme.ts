import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  color: {
    primary: {
      main: "#ececec",
      contrastText: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#959da533",
    },
  },
};

const dark: DefaultTheme = {
  color: {
    primary: {
      main: "#212c36",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2a3743",
      contrastText: "#fff",
    },
  },
};

export const themes = {
  light,
  dark,
};
