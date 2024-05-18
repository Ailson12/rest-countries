import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountryDetails } from ".";
import { MemoryRouter } from "react-router-dom";

describe("CountryDetails", () => {
  it("should mount the component", () => {
    expect(() => {
      render(
        <MemoryRouter>
          <CountryDetails />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
});
