import { FC, MouseEvent, useMemo, useState } from "react";
import { Typograph } from "../Typograph";
import { SelectOptionType } from "@/types/select";
import {
  Anchor,
  OptionItem,
  OptionWrapper,
  BackgroundOptionWrapper,
  CloseIconWrapper,
} from "./styles";
import { testIds } from "./testIds";
import closeIcon from "@/assets/close-icon.svg";

type Props = {
  title: string;
  value: null | string;
  onChange(value: Props["value"]): void;
  options: SelectOptionType[];
};

export const Select: FC<Props> = ({ title, value, onChange, options }) => {
  const [show, setShow] = useState(false);

  const optionSelected = useMemo(
    () => options.find((option) => option.value === value),
    [value, options]
  );

  const containsDuplicateOptions = useMemo(() => {
    const values = options.map((option) => option.value);
    const uniqueValues = new Set(values);
    const isInvalid = values.length !== uniqueValues.size;

    if (isInvalid) {
      console.error("options duplicated!");
    }

    return isInvalid;
  }, [options]);

  const onClose = () => setShow(false);

  const clearValue = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange(null);
  };

  if (containsDuplicateOptions) return null;

  return (
    <div
      style={{ minWidth: "150px", position: "relative", width: "max-content" }}
    >
      <Anchor data-testid={testIds.anchor} onClick={() => setShow(!show)}>
        <Typograph>{optionSelected?.legend ?? title}</Typograph>
        {value?.length && (
          <CloseIconWrapper onClick={clearValue}>
            <img src={closeIcon} alt="close icon" height={20} width={20} />
          </CloseIconWrapper>
        )}
      </Anchor>

      <BackgroundOptionWrapper
        onClick={onClose}
        data-testid={testIds.backgroundOption}
        $position={show ? "fixed" : "initial"}
      />

      <OptionWrapper
        data-testid={testIds.optionWrapper}
        display={show ? "block" : "none"}
      >
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
