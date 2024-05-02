import { Container } from "../Container";
import { Typograph } from "../Typograph";

export const Navbar = () => {
  return (
    <div style={{ backgroundColor: "var(--color-2)" }}>
      <Container padding="1.5rem">
        <Typograph data-testid="title" variant="h1">
          Em que parte do mundo?
        </Typograph>
      </Container>
    </div>
  );
};
