import styled from "styled-components";

export const ContentWrapper = styled.div({
  display: "grid",
  gap: "1rem",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr",
  '& img': {
    maxWidth: 400,
    width: '100%'
  },
  '@media (max-width: 800px)': {
    gridTemplateColumns: '1fr'
  }
});

export const MetaDataContainer = styled.div({
  display: "flex",
  maxWidth: "475px",
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: "space-between",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
});
