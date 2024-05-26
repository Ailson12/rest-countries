import styled from "styled-components";

export const CountryCardWrapper = styled.button({
  width: "max-content",
  display: "flex",
  flex: 1,
  minWidth: 260,
  flexDirection: "column",
}, ({ theme }) => ({
  backgroundColor: theme.color.secondary.main
}))