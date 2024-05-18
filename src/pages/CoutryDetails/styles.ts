import styled from "styled-components";

export const ContentWrapper = styled.div({
  display: "grid",
  gap: "1rem",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr",
});

export const MetaDataContainer = styled.div({
  display: "flex",
  maxWidth: "475px",
  justifyContent: "space-between",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
});
