import styled from "styled-components";

export const InputWrapper = styled.div<{
  $maxWidth?: number;
}>(
  {
    boxShadow: "rgb(33 44 54) 0px 8px 24px",
    borderRadius: 6,
    width: "100%",
    "& input": {
      background: "inherit",
      border: 0,
      width: "inherit",
      borderRadius: "inherit",
      outline: 0,
      color: "#fff",
      fontSize: "1rem",
      fontFamily: "inherit",
      padding: "0.875rem 1.25rem",
      "&::placeholder": {
        color: "#fff",
        fontWeight: 300,
      },
      "&:focus-visible": {
        boxShadow: "0 0 0 1px #777",
      },
    },
  },
  ({ $maxWidth, theme }) => ({
    background: theme.color.secondary.main,
    ...($maxWidth && {
      maxWidth: `${$maxWidth / 16}rem`,
    }),
  })
);
