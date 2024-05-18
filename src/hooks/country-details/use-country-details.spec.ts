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
});
