import { CountryType } from "@/types/coutry";
import { useCallback, useState } from "react";
import { getCountryByCcn3 } from "@/services/country/getCountryByCcn3.service";

type Params = {
  ccn3?: string;
};

export const useCountryDetails = (params: Params = {}) => {
  const { ccn3 } = params;

  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState<CountryType | null>(null);

  const fetchData = useCallback(() => {
    if (!ccn3?.trim()) return Promise.resolve();

    setIsLoading(true);
    return getCountryByCcn3(ccn3)
      .then((data) => {
        setCountry(data.at(0) ?? null);
      })
      .finally(() => setIsLoading(false));
  }, [ccn3]);

  return {
    country,
    fetchData,
    isLoading,
  };
};
