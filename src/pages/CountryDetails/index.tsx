import { Button } from "@/components/Button";
import backIcon from "@/assets/back-icon.svg";
import { Container } from "@/components/Container";
import { Typograph } from "@/components/Typograph";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper, MetaDataContainer } from "./styles";
import { numberFormat } from "@/helpers/number-format.helper";
import { Loading } from "@/components/Loading";
import { useCountryDetails } from "@/hooks/country-details/useCountryDetails";
import { useEffect } from "react";

export const CountryDetails = () => {
  const { ccn3 } = useParams();
  const navigate = useNavigate();
  const { country, fetchData, isLoading } = useCountryDetails({
    ccn3,
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const generateMetaData = (key: string, value: string) => {
    return (
      <Typograph marginBottom={6} variant="body-2" color="#dae1e7">
        {key}: <span style={{ color: "#b8bfc6" }}>{value}</span>
      </Typograph>
    );
  };

  return (
    <Container>
      <Button
        style={{
          margin: "1rem 0 4rem 0",
        }}
        appendIcon={
          <img height={20} width={20} src={backIcon} alt="back-icon" />
        }
        onClick={() => navigate("/")}
      >
        Voltar
      </Button>

      <Loading isVisible={isLoading} />

      {country && (
        <ContentWrapper>
          <img width={400} height={200} src={country.flags.svg} alt="country" />
          <div>
            <Typograph fontSize={28} fontWeight={600} marginBottom={16}>
              {country.translations.por.common}
            </Typograph>
            <MetaDataContainer>
              <div>
                {generateMetaData(
                  "População",
                  numberFormat(country.population)
                )}
                {generateMetaData("Região", country.region)}
                {generateMetaData("Sub-região", country.subregion)}
                {generateMetaData("Capital", country.capital[0])}
              </div>
              <div>
                {generateMetaData(
                  "Moedas",
                  Object.values(country.currencies)
                    .map((row) => row.name)
                    .join(",")
                )}
                {generateMetaData(
                  "Línguas",
                  Object.values(country.languages).join(",")
                )}
              </div>
            </MetaDataContainer>
          </div>
        </ContentWrapper>
      )}
    </Container>
  );
};
