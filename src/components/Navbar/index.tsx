import { Typograph } from "../Typograph";
import { NavbarWrapper } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Typograph data-testid="title" variant="h1">Em que parte do mundo?</Typograph>
    </NavbarWrapper>
  );
};
