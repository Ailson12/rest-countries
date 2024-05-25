import { ReactNode } from "react";
import { themes } from "@/config/theme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

type Params = {
  component: ReactNode;
  addMemoryRouter?: boolean;
  paramsMemoryRouter?: MemoryRouterProps;
};

export const renderSetup = ({
  component,
  addMemoryRouter,
  paramsMemoryRouter,
}: Params) => {
  const componentWithTheme = (
    <ThemeProvider theme={themes.dark}>{component}</ThemeProvider>
  );

  return addMemoryRouter ? (
    <MemoryRouter {...paramsMemoryRouter}>{componentWithTheme}</MemoryRouter>
  ) : (
    componentWithTheme
  );
};
