import { Select } from "@/components/Select";
import { SelectOptionType } from "@/types/select";
import { useState } from "react";

export const RegionSelect = () => {
  const options = [
    {
      legend: "Africa",
      value: "africa",
    },
    {
      legend: "America",
      value: "america",
    },
    {
      legend: "Europa",
      value: "europa",
    },
  ] satisfies SelectOptionType[];

  const [region, setRegion] = useState("");

  return (
    <Select
      value={region}
      onChange={(value) => setRegion(value)}
      title="Filtro por região"
      options={options}
    />
  );
};
