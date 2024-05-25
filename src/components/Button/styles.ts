import styled from "styled-components";

export const ButtonWrapper = styled.button(
  {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    borderRadius: 4,
    padding: "0.5rem 1.25rem",
  },
  ({ theme }) => ({
    border: `1px solid ${theme.border.cp1}`,
    color: theme.color.primary.contrastText,
    background: theme.color.secondary.main,
  })
);
