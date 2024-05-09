import { Button } from "@/components/Button";
import backIcon from "@/assets/back-icon.svg";
import { Container } from "@/components/Container";

export const CoutryDetails = () => {
  return (
    <Container>
      <Button
        appendIcon={
          <img height={20} width={20} src={backIcon} alt="back-icon" />
        }
      >
        Voltar
      </Button>
      <div>conteudo</div>
    </Container>
  );
};
