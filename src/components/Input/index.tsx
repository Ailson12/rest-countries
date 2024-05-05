import { FC, InputHTMLAttributes } from "react";
import { InputWrapper } from "./styles";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  maxWidth?: number;
  onChange?: (value: string) => void;
};

export const Input: FC<Props> = ({ onChange, maxWidth, ...props }) => {
  return (
    <InputWrapper $maxWidth={maxWidth}>
      <input
        onChange={({ target }) => onChange?.(target.value)}
        type="text"
        {...props}
      />
    </InputWrapper>
  );
};
