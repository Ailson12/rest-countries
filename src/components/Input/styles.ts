import styled from "styled-components";

export const InputWrapper = styled.div<{
  $maxWidth?: number;
}>(
  {
    borderRadius: 6,
    width: "100%",
    "& input": {
      background: "inherit",
      border: 0,
      width: "inherit",
      borderRadius: "inherit",
      outline: 0,
      fontSize: "1rem",
      fontFamily: "inherit",
      padding: "0.875rem 1.25rem",
    },
  },
  ({ $maxWidth, theme: { color, border } }) => ({
    border: `1px solid ${border.cp1}`,
    background: color.secondary.main,
    "& input": {
      color: color.primary.contrastText,
      "&::placeholder": {
        color: color.primary.contrastText,
      },
    },
    ...($maxWidth && {
      maxWidth: `${$maxWidth / 16}rem`,
    }),
  })
);
