import { useTheme } from "styled-components";
import { Container } from "../Container";
import { Typograph } from "../Typograph";
import { Button } from "../Button";
import { useThemeStore } from "@/store/useTheme.store";
import { ThemeEnum } from "@/enums/ThemeEnum";

export const Navbar = () => {
  const { color } = useTheme();
  const { setTheme, theme } = useThemeStore();

  return (
    <div style={{ backgroundColor: color.secondary.main }}>
      <Container
        padding="1.5rem"
        style={{
          display: "flex",
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
        <Button
          onClick={() => {
            setTheme(
              theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
            );
          }}
        >
          Alterar tema
        </Button>
      </Container>
    </div>
  );
};
