import styled from "styled-components";

export const ButtonWrapper = styled.button(
  {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    color: "#fff",
    borderRadius: 4,
    boxShadow: "rgb(21 29 37) 0px 4px 24px",
    padding: "0.5rem 1.25rem",
  },
  ({ theme }) => ({
    background: theme.color.secondary.main,
  })
);
