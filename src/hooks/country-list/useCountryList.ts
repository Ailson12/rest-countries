import { CountryType } from "@/types/coutry";
import { useCallback, useState } from "react";
import { getAllCountry } from "@/services/country/getAllCountry.service";
import { getAllCountryByRegion } from "@/services/country/getAllCountryByRegion.service";
import { getAllCountryByName } from "@/services/country/getAllCountryByName.service";

type FetchParams = {
  region?: string;
  name?: string;
};

type KeyFetchParams = keyof FetchParams;

export const useCountryList = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

      if (value.length) {
        currentRequest = method(value);
      }
    });

    return currentRequest == null ? requests.default() : currentRequest;
  };

  const fetchData = useCallback((params: FetchParams = {}) => {
    setIsLoading(true)
    return getRequest(params)
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    countries,
    isLoading,
    fetchData,
    countryName: {
      value: countryName,
      onChange: setCountryName,
    },
  };
};
