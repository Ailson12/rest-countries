import { CountryType } from "@/types/coutry";
import { useCallback, useState } from "react";
import { getAllCountry } from "@/services/country/getAllCountry.service";
import { getAllCountryByRegion } from "@/services/country/getAllCountryByRegion.service";
import { RegionEnum } from "@/enums/RegionEnum";

export const useCountryList = () => {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState<CountryType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(() => {
    setIsLoading(true)
    return getAllCountry()
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false))
  }, [])

  const fetchDataByRegion = useCallback((region: RegionEnum) => {
    setIsLoading(true)
    return getAllCountryByRegion(region)
      .then((data) => setCountries(data))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    countries,
    isLoading,
    fetchData,
    fetchDataByRegion,
    countryName: {
      value: countryName,
      onChange: setCountryName
    }
  }
}