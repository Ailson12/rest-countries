import { Container } from "@/components/Container";
import { CountryCard } from "@/components/CountryCard";
import { useCountryList } from "@/hooks/country-list/useCountryList";
import { useEffect } from "react";
import { FilterWrapper, ListWrapper } from "./styles";
import { Loading } from "@/components/Loading";
import { RegionSelect } from "./components/RegionSelect";
import { useCountryFilterStore } from "@/store/country-filter.store";

export const CountryList = () => {
  const { region } = useCountryFilterStore()
  const { fetchData, fetchDataByRegion, isLoading, countries } = useCountryList();

  useEffect(() => {
    if (region?.length) {
      fetchDataByRegion(region)
    } else {
      fetchData();
    }
  }, [region, fetchData, fetchDataByRegion]);

  return (
    <Container>
      <FilterWrapper>
        <div />
        <RegionSelect />
      </FilterWrapper>

      <Loading isVisible={isLoading} />

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
