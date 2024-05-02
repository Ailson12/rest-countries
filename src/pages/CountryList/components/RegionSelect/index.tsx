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
      options={options}
      title="Filtro por região"
      onChange={(value) => setRegion(value)}
    />
  );
};
