import { FC, HTMLAttributes } from "react";
import { Typograph } from "../Typograph";
import { numberFormat } from "@/helpers/number-format.helper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { CountryCardWrapper } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  image: {
    url: string;
  };
  population: number;
  region: string;
  capital: string;
  ccn3: string;
};

export const CountryCard: FC<Props> = ({
  name,
  image,
  region,
  capital,
  population,
  ...props
}) => {
  const { color } = useTheme();
  const navigate = useNavigate();

  const redirectDetails = () => navigate(`/detail/${props.ccn3}`);
  const generateMetaData = (key: string, value: string) => {
    return (
      <Typograph
        marginBottom={6}
        variant="body-2"
        fontWeight={400}
        color={color.primary.contrastText}
      >
        {key}:{" "}
        <span style={{ opacity: 0.7, color: color.primary.contrastText }}>
          {value}
        </span>
      </Typograph>
    );
  };

  return (
    <CountryCardWrapper type="button" {...props} onClick={redirectDetails}>
      <img
        style={{
          objectFit: "cover",
          width: "100%",
        }}
        src={image.url}
        alt={name}
        height={140}
        width={260}
      />
      <div style={{ padding: 14 }}>
        <Typograph
          style={{ maxWidth: "20ch", wordBreak: "break-word" }}
          variant="h2"
          fontWeight={600}
          color={color.primary.contrastText}
          marginBottom={12}
        >
          {name}
        </Typograph>
        {generateMetaData("População", numberFormat(population))}
        {generateMetaData("Região", region)}
        {generateMetaData("Capital", capital)}
      </div>
    </CountryCardWrapper>
  );
};
