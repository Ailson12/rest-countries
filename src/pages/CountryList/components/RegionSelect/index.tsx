import { Select } from "@/components/Select";
import { RegionEnum } from "@/enums/RegionEnum";
import { useCountryFilterStore } from "@/store/country-filter.store";
import { SelectOptionType } from "@/types/select";

export const RegionSelect = () => {
  const { region, setRegion, setName } = useCountryFilterStore();
  const options = [
    {
      legend: "África",
      value: RegionEnum.AFRICA,
    },
    {
      legend: "América",
      value: RegionEnum.AMERICA,
    },
    {
      legend: "Ásia",
      value: RegionEnum.ASIA,
    },
    {
      legend: "Europa",
      value: RegionEnum.EUROPE,
    },
    {
      legend: "Oceania",
      value: RegionEnum.OCEANIA,
    },
  ] satisfies SelectOptionType[];

  const onChange = (value: string) => {
    setRegion(value as RegionEnum);
    setName("");
  };

  return (
    <Select
      value={region}
      options={options}
      title="Filtro por região"
      onChange={onChange}
    />
  );
};
