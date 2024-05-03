import { Select } from "@/components/Select";
import { useCountryFilterStore } from "@/store/country-filter.store";
import { SelectOptionType } from "@/types/select";

export const RegionSelect = () => {
  const { region, setRegion } = useCountryFilterStore()
  const options = [
    {
      legend: "África",
      value: "africa",
    },
    {
      legend: "América",
      value: "america",
    },
    {
      legend: "Ásia",
      value: "asia",
    },
    {
      legend: "Europa",
      value: "europe",
    },
    {
      legend: "Oceania",
      value: "oceania",
    },
  ] satisfies SelectOptionType[];

  return (
    <Select
      value={region}
      options={options}
      title="Filtro por região"
      onChange={(value) => setRegion(value)}
    />
  );
};
