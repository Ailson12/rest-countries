import { FC, ReactElement, ReactNode } from "react";
import { ButtonWrapper } from "./styles";

type Props = {
  children: ReactNode;
  appendIcon?: ReactElement;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ onClick, appendIcon, children }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {appendIcon}
      {children}
    </ButtonWrapper>
  );
};
