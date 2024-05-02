import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountryList } from "./index";

describe("Country List - Component", () => {
  it("should show a load while the data is loaded and then disappear when finished", async () => {
    render(<CountryList />)

    const loadingElement = screen.queryByTestId('loading-content')
    expect(loadingElement).not.toBe(null)

    await waitForElementToBeRemoved(loadingElement)
  });

  it("should display a list of uploaded countries", async () => {
    render(<CountryList />)

    const countries = await screen.findAllByTestId('country-item')
    expect(countries).toHaveLength(2)
  });
});
