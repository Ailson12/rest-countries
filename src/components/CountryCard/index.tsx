import { FC, HTMLAttributes } from "react";
import { Typograph } from "../Typograph";
import { numberFormat } from "@/helpers/number-format.helper";
import { useNavigate } from "react-router-dom";

type Props = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  image: {
    url: string;
  };
  population: number;
  region: string;
  capital: string;
  ccn3: string
};

export const CountryCard: FC<Props> = ({
  name,
  image,
  region,
  capital,
  population,
  ...props
}) => {
  const navigate = useNavigate();

  const redirectDetails = () => navigate(`/detail/${props.ccn3}`);
  const generateMetaData = (key: string, value: string) => {
    return (
      <Typograph marginBottom={6} variant="body-2">
        {key}: <span style={{ color: "#b8bfc6" }}>{value}</span>
      </Typograph>
    );
  };

  return (
    <button
      {...props}
      style={{ width: "max-content", backgroundColor: "#2a3743" }}
      onClick={redirectDetails}
    >
      <img
        style={{
          objectFit: "cover",
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
          marginBottom={12}
        >
          {name}
        </Typograph>
        {generateMetaData("População", numberFormat(population))}
        {generateMetaData("Região", region)}
        {generateMetaData("Capital", capital)}
      </div>
    </button>
  );
};
