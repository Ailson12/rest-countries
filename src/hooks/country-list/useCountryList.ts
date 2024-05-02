import { CountryType } from "@/types/coutry";
import { useCallback, useState } from "react";
import { getAllCountry } from "@/services/country/getAllCountry.service";

export const useCountryList = () => {
  const [countries, setCountries] = useState<CountryType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(() => {
    setIsLoading(true)
    return getAllCountry()
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    countries,
    isLoading,
    fetchData
  }
}