import styled, { CSSProperties } from "styled-components";

export const Anchor = styled.div({
  padding: "0.875rem 1.25rem",
  background: "#2a3743",
  borderRadius: "6px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  boxShadow: "rgb(33 44 54) 0px 8px 24px",
  justifyContent: "space-between",
});

export const CloseIconWrapper = styled.button({
  padding: 0,
  border: 0,
  background: "none",
  cursor: "pointer",
});

export const OptionWrapper = styled.ul<{
  display: CSSProperties["display"];
}>(
  {
    boxShadow: "rgb(33 44 54) 0px 8px 24px",
    background: "#2a3743",
    marginTop: 6,
    borderRadius: 6,
    position: "absolute",
    left: 0,
    width: "100%",
    userSelect: "none",
  },
  ({ display }) => ({
    display,
  })
);

export const OptionItem = styled.li<{
  $isActive: boolean;
}>(
  {
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#3f5364",
    },
  },
  ({ $isActive }) => ({
    backgroundColor: $isActive ? "#3f5364" : "",
  })
);

export const BackgroundOptionWrapper = styled.div<{
  position: CSSProperties["position"];
}>(
  {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ({ position }) => ({
    position,
  })
);
