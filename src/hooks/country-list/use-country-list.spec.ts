import { describe, expect, it } from "vitest";
import { act, renderHook } from '@testing-library/react'
import { useCountryList } from "./useCountryList";
import { RegionEnum } from "@/enums/RegionEnum";

describe('Contry List - Hook', () => {
  it('the list of countries must start empty', () => {
    const { result } = renderHook(useCountryList)
    const { countries } = result.current
    expect(countries.length).toBe(0)
  })

  it('the loading status must start as false', () => {
    const { result } = renderHook(useCountryList)
    const { isLoading } = result.current
    expect(isLoading).toBe(false)
  })

  it('should search all countries when there is no filter', async () => {
    const { result } = renderHook(useCountryList)
    const { fetchData } = result.current

    await act(() => fetchData())

    expect(result.current.countries).toHaveLength(2)
  })

  it('should search for countries by region when this field is filled in', async () => {
    const { result } = renderHook(useCountryList)
    const { fetchData } = result.current
    
    await act(() => fetchData({
      region: RegionEnum.EUROPE
    }))

    expect(result.current.countries).toHaveLength(3)
  })
})