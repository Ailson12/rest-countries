import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useCountryList } from "./useCountryList";
import { RegionEnum } from "@/enums/RegionEnum";
import { useCountryFilterStore } from "@/store/country-filter.store";

describe("Contry List - Hook", () => {
  it("the list of countries must start empty", () => {
    const { result } = renderHook(useCountryList);
    const { countries } = result.current;
    expect(countries.length).toBe(0);
  });

  it("the loading status must start as false", () => {
    const { result } = renderHook(useCountryList);
    const { isLoading } = result.current;
    expect(isLoading).toBe(false);
  });

  it("should search all countries when there is no filter", async () => {
    const { result } = renderHook(useCountryList);
    const { fetchData } = result.current;

    await act(() => fetchData());

    expect(result.current.countries).toHaveLength(2);
  });

  it("should search for countries by region when this field is filled in", async () => {
    const { result } = renderHook(useCountryList);
    const { fetchData } = result.current;

    await act(() =>
      fetchData({
        region: RegionEnum.EUROPE,
      })
    );

    expect(result.current.countries).toHaveLength(3);
  });

  it("should search for countries by name when this field is filled in", async () => {
    const { result } = renderHook(useCountryList);
    const { fetchData } = result.current;

    await act(() =>
      fetchData({
        name: "brazil",
      })
    );

    expect(result.current.countries).toHaveLength(1);
  });

  it("should reset the region value when changing the name value", () => {
    const { result } = renderHook(useCountryList);
    const { result: resultFilter } = renderHook(() => useCountryFilterStore());

    act(() => resultFilter.current.setRegion(RegionEnum.AFRICA));
    expect(resultFilter.current.region).toEqual(RegionEnum.AFRICA);

    act(() => result.current.countryName.onChange("brazil"));
    expect(resultFilter.current.region).toBeNull();
  });
});
