import { FC, ReactNode } from "react";

type Props = {
  padding?: string;
  children?: ReactNode;
};

export const Container: FC<Props> = ({ padding = "30px", children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding,
      }}
    >
      {children}
    </div>
  );
};
