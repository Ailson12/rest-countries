import { Button } from "@/components/Button";
import { CountryType } from "@/types/coutry";
import backIcon from "@/assets/back-icon.svg";
import { Container } from "@/components/Container";
import { Typograph } from "@/components/Typograph";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper, MetaDataContainer } from "./styles";
import { numberFormat } from "@/helpers/number-format.helper";
import { getCountryByCcn3 } from "@/services/country/getCountryByCcn3.service";
import { Loading } from "@/components/Loading";

export const CoutryDetails = () => {
  const { ccn3 } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryType | null>(null);

  const fetchData = useCallback(() => {
    if (ccn3) {
      setLoading(true)
      getCountryByCcn3(ccn3).then((data) => {
        setCountry(data.at(0) ?? null);
      })
      .finally(() => setLoading(false));
    }
  }, [ccn3]);

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

      <Loading isVisible={loading} />

      {country && (
        <ContentWrapper>
          <img width={400} height={200} src={country.flags.svg} alt="rest" />
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
