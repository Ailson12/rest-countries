import { http } from "@/config/http"
import { CountryType } from "@/types/coutry"

export const getAllCountryByRegion = (region: string) => {
  return http.get<CountryType[]>(`region/${region}`).then((response) => response.data)
}