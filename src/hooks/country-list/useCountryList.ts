import { CountryType } from "@/types/coutry";
import { useCallback, useState } from "react";
import { getAllCountry } from "@/services/country/getAllCountry.service";
import { getAllCountryByRegion } from "@/services/country/getAllCountryByRegion.service";
import { getAllCountryByName } from "@/services/country/getAllCountryByName.service";
import { RegionEnum } from "@/enums/RegionEnum";
import { useDebounce } from "use-debounce";
import { useCountryFilterStore } from "@/store/country-filter.store";

type FetchParams = {
  region?: RegionEnum | null;
  name?: string;
};

type KeyFetchParams = keyof FetchParams;

export const useCountryList = () => {
  const { name, setRegion, setName } = useCountryFilterStore();
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryNameDebounced] = useDebounce(name, 500);

  const getRequest = (params: FetchParams) => {
    const requests = {
      default: getAllCountry,
      name: getAllCountryByName,
      region: getAllCountryByRegion,
    };

    let currentRequest: Promise<CountryType[]> | null = null;

    Object.entries(params).forEach((row) => {
      const key = row[0] as KeyFetchParams;
      const value = row[1];
      const method = requests[key];

      if (value?.length) {
        currentRequest = method(value);
      }
    });

    return currentRequest ?? requests.default();
  };

  const fetchData = useCallback((params: FetchParams = {}) => {
    setIsLoading(true);
    return getRequest(params)
      .then((data) => setCountries(data))
      .catch(() => setCountries([]))
      .finally(() => setIsLoading(false));
  }, []);

  const changeCountryName = (value: string) => {
    setName(value);
    setRegion(null);
  };

  return {
    countries,
    isLoading,
    fetchData,
    countryName: {
      value: name,
      onChange: changeCountryName,
      valueDebounced: countryNameDebounced,
    },
  };
};
