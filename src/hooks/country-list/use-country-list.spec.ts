import { describe, expect, it } from "vitest";
import { act, renderHook } from '@testing-library/react'
import { useCountryList } from "./useCountryList";

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

  it('the countries variable must be populated after the fetch', async () => {
    const { result } = renderHook(useCountryList)
    const { fetchData } = result.current

    await act(() => fetchData())

    expect(result.current.countries).toHaveLength(2)
  })
})