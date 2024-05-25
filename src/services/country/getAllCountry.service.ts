import { http } from "@/config/http";
import { CountryType } from "@/types/coutry";

export const getAllCountry = () => {
  return http.get<CountryType[]>('/all').then((response) => response.data)
}