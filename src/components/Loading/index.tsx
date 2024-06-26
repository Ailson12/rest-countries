import { FC } from "react";
import styled from "styled-components";

const LoadingWrapper = styled.span(
  {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    display: "flex",
    margin: "2rem auto",
    position: "relative",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
    "&:after": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      boxSizing: "border-box",
      border: "3px solid",
      borderColor: "#FF3D00 transparent",
    },
    "@keyframes rotation": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  },
  ({ theme }) => ({
    border: `3px solid ${theme.color.secondary.contrastText}`,
  })
);

type Props = {
  isVisible?: boolean;
};

export const Loading: FC<Props> = ({ isVisible }) => {
  return isVisible && <LoadingWrapper data-testid="loading-content" />;
};
