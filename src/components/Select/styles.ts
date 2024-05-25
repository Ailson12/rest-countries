import styled, { CSSProperties } from "styled-components";

export const Anchor = styled.div(
  {
    padding: "0.875rem 1.25rem",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  ({ theme }) => ({
    background: theme.color.secondary.main,
    border: `1px solid ${theme.border.cp1}`,
  })
);

export const CloseIconWrapper = styled.button({
  padding: 0,
  border: 0,
  display: 'flex',
  background: "none",
  cursor: "pointer",
});

export const OptionWrapper = styled.ul<{
  display: CSSProperties["display"];
}>(
  {
    boxShadow: "rgb(33 44 54) 0px 8px 24px",
    marginTop: 6,
    borderRadius: 6,
    position: "absolute",
    left: 0,
    width: "100%",
    userSelect: "none",
  },
  ({ display, theme }) => ({
    display,
    background: theme.color.secondary.main,
  })
);

export const OptionItem = styled.li<{
  $isActive: boolean;
}>(
  {
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    transition: "0.3s",
  },
  ({ $isActive, theme }) => ({
    "&:hover": {
      background: theme.border.cp1,
    },
    backgroundColor: $isActive ? theme.border.cp1: "",
  })
);

export const BackgroundOptionWrapper = styled.div<{
  $position: CSSProperties["position"];
}>(
  {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ({ $position }) => ({
    position: $position,
  })
);
