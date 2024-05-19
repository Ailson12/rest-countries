import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCountryDetails } from "./useCountryDetails";

describe("Contry Details - Hook", () => {
  it("the variable of country must start empty", () => {
    const { result } = renderHook(useCountryDetails);
    const { country } = result.current;
    expect(country).toBeNull();
  });

  it("the loading status must start as false", () => {
    const { result } = renderHook(useCountryDetails);
    const { isLoading } = result.current;
    expect(isLoading).toBe(false);
  });

  it("should perform the search when the ccn3 parameter is supplied", async () => {
    const { result } = renderHook(useCountryDetails, {
      initialProps: {
        ccn3: "071",
      },
    });

    await act(() => result.current.fetchData());
    expect(result.current.country).toBeTruthy();
  });

  it("should not perform the search when the ccn3 parameter is empty", async () => {
    const { result } = renderHook(useCountryDetails, {
      initialProps: {
        ccn3: "",
      },
    });

    await act(() => result.current.fetchData());
    expect(result.current.country).toBeNull();
  });

  it("should set a null value when the api can't find the country via ccn3", async () => {
    const { result } = renderHook(useCountryDetails, {
      initialProps: {
        ccn3: "invalid",
      },
    });
    await act(() => result.current.fetchData());
    expect(result.current.country).toBeNull();
  });
});
