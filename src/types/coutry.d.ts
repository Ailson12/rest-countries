export type CurrencieType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export interface CountryType {
  flags: {
    svg: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  ccn3: string
  region: string;
  subregion: string;
  population: number;
  capital: string[];
  currencies: CurrencieType;
  languages: Record<string, string>;
}
