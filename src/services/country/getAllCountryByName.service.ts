import { http } from "@/config/http"
import { CountryType } from "@/types/coutry"

export const getAllCountryByName = (name: string) => {
  return http.get<CountryType[]>(`name/${name}`).then((response) => response.data)
}