import { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import { ButtonWrapper } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  appendIcon?: ReactElement;
};

export const Button: FC<Props> = ({ appendIcon, children, ...props }) => {
  return (
    <ButtonWrapper type="button" {...props}>
      {appendIcon}
      {children}
    </ButtonWrapper>
  );
};
