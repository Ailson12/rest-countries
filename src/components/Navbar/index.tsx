import { useTheme } from "styled-components";
import { Container } from "../Container";
import { Typograph } from "../Typograph";
import { Button } from "../Button";
import { useThemeStore } from "@/store/theme.store";
import { ThemeEnum } from "@/enums/ThemeEnum";

export const Navbar = () => {
  const { color } = useTheme();
  const { setTheme, theme } = useThemeStore();

  const { DARK, LIGHT } = ThemeEnum;

  const toggleTheme = () => {
    setTheme(theme === DARK ? LIGHT : DARK);
  };

  return (
    <div style={{ backgroundColor: color.secondary.main }}>
      <Container
        padding="1.5rem"
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typograph
          color={color.primary.contrastText}
          data-testid="title"
          variant="h1"
        >
          Em que parte do mundo?
        </Typograph>
        <Button onClick={toggleTheme}>
          Ativar Modo {theme === DARK ? "Claro" : "Escuro"}
        </Button>
      </Container>
    </div>
  );
};
