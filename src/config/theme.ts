import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  border: {
    cp1: "#cdcdcd",
  },
  color: {
    primary: {
      main: "#ececec",
      contrastText: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#696969",
    },
  },
};

const dark: DefaultTheme = {
  border: {
    cp1: "#535353",
  },
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
