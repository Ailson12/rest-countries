import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
  color?: string;
  variant?: "h1" | "h2" | "body" | "body-2";
  marginBottom?: string | number;
  align?: CSSProperties["textAlign"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
};

export const Typograph: FC<Props> = ({
  variant = "body",
  color = "#fff",
  fontSize,
  children,
  fontWeight,
  marginBottom,
  align = "start",
  ...props
}) => {
  const getStyleByVariant = () => {
    const styles = {
      h1: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.125rem",
        fontWeight: 500,
      },
      body: {
        fontSize: "1rem",
        fontWeight: 300,
      },
      "body-2": {
        fontSize: "0.875rem",
        fontWeight: 300,
      },
    };

    return styles[variant];
  };

  const style = getStyleByVariant();

  return (
    <p
      {...props}
      style={{
        fontWeight: fontWeight ?? style.fontWeight,
        fontSize: fontSize ?? style.fontSize,
        textAlign: align,
        marginBottom,
        color,
        ...props.style,
      }}
    >
      {children}
    </p>
  );
};
