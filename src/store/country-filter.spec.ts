import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCountryFilterStore } from "./country-filter.store";
import { RegionEnum } from "@/enums/RegionEnum";

describe('Country filter - Hook', () => {
  it('should update region value with setRegion', () => {
    const { result } = renderHook(() => useCountryFilterStore())
    const { region, setRegion } = result.current

    expect(region).toBeNull()
    act(() => setRegion(RegionEnum.AFRICA))
    expect(result.current.region).toEqual(RegionEnum.AFRICA)
  })
})