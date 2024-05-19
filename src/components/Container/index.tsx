import { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";

type Props = {
  padding?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export const Container: FC<Props> = ({ style, padding = "30px", children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
