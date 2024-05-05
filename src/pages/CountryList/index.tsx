import { useEffect } from "react";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { Container } from "@/components/Container";
import { FilterWrapper, ListWrapper } from "./styles";
import { CountryCard } from "@/components/CountryCard";
import { RegionSelect } from "./components/RegionSelect";
import { useCountryList } from "@/hooks/country-list/useCountryList";
import { useCountryFilterStore } from "@/store/country-filter.store";

export const CountryList = () => {
  const { region } = useCountryFilterStore();
  const { fetchData, countryName, fetchDataByRegion, isLoading, countries } =
    useCountryList();

  useEffect(() => {
    if (region?.length) {
      fetchDataByRegion(region);
    } else {
      fetchData();
    }
  }, [region, fetchData, fetchDataByRegion]);

  return (
    <Container>
      <FilterWrapper>
        <Input
          value={countryName.value}
          onChange={countryName.onChange}
          placeholder="Procurar um país..."
          maxWidth={300}
        />
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
