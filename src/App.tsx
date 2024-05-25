import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./config/theme";
import { useThemeStore } from "./store/theme.store";

const BodyBackground = styled.div(({ theme }) => {
  return {
    minHeight: "100vh",
    background: theme.color.primary.main,
  };
});

export const App = () => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={themes[theme]}>
      <BodyBackground>
        <Navbar />
        <Outlet />
      </BodyBackground>
    </ThemeProvider>
  );
};
