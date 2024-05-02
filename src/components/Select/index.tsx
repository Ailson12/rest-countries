import { FC, useMemo, useState } from "react";
import { Typograph } from "../Typograph";
import { SelectOptionType } from "@/types/select";
import {
  Anchor,
  OptionItem,
  OptionWrapper,
  BackgroundOptionWrapper,
} from "./styles";

type Props = {
  title: string;
  value: string;
  onChange(value: string): void;
  options: SelectOptionType[];
};

export const Select: FC<Props> = ({ title, value, onChange, options }) => {
  const [show, setShow] = useState(false);

  const optionSelected = useMemo(
    () => options.find((option) => option.value === value),
    [value, options]
  );

  const onClose = () => setShow(false);
  return (
    <div
      style={{ minWidth: "150px", position: "relative", width: "max-content" }}
    >
      <Anchor onClick={() => setShow(!show)}>
        <Typograph>{optionSelected?.legend ?? title}</Typograph>
      </Anchor>

      <BackgroundOptionWrapper
        onClick={onClose}
        position={show ? "fixed" : "initial"}
      />

      <OptionWrapper display={show ? "block" : "none"}>
        {options.map((option) => (
          <OptionItem
            $isActive={value == option.value}
            onClick={() => {
              onChange(option.value);
              onClose();
            }}
            key={option.value}
          >
            <Typograph>{option.legend}</Typograph>
          </OptionItem>
        ))}
      </OptionWrapper>
    </div>
  );
};
