import { Container } from "@/components/Container";
import { CountryCard } from "@/components/CountryCard";
import { useCountryList } from "@/hooks/country-list/useCountryList";
import { useEffect } from "react";
import { FilterWrapper, ListWrapper } from "./styles";
import { Loading } from "@/components/Loading";
import { RegionSelect } from "./components/RegionSelect";

export const CountryList = () => {
  const { fetchData, isLoading, countries } = useCountryList();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Loading isVisible={isLoading} />

      <FilterWrapper>
        <div />
        <RegionSelect />
      </FilterWrapper>

      <ListWrapper>
        {countries.map((country) => (
          <CountryCard
            data-testid={"country-item"}
            key={country.flags.svg}
            name={country.translations.por.common}
            capital={country.capital?.[0]}
            population={country.population}
            region={country.region}
            image={{
              url: country.flags.svg,
            }}
          />
        ))}
      </ListWrapper>
    </Container>
  );
};
