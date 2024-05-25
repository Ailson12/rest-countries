import { http } from "@/config/http";
import { CountryType } from "@/types/coutry";

export const getCountryByCcn3 = (ccn3: string) => {
  return http
    .get<CountryType[]>(`/alpha/${ccn3}`)
    .then((response) => response.data);
};
