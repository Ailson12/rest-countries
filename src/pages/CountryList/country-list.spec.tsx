import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountryList } from "./index";
import { testIds } from "@/components/Select/testIds";
import { MemoryRouter } from "react-router-dom";

const makeComponent = () => {
  return (
    <MemoryRouter>
      <CountryList />
    </MemoryRouter>
  );
};

describe("Country List - Component", () => {
  it("should show a load while the data is loaded and then disappear when finished", async () => {
    render(makeComponent());

    const loadingElement = screen.queryByTestId("loading-content");
    expect(loadingElement).not.toBe(null);

    await waitForElementToBeRemoved(loadingElement);
  });

  it("should display a list of uploaded countries", async () => {
    render(makeComponent());

    const countries = await screen.findAllByTestId("country-item");
    expect(countries).toHaveLength(2);
  });

  it("should redo the search when any region is selected", async () => {
    const { rerender } = render(makeComponent());
    const anchor = await screen.findByTestId(testIds.anchor);
    fireEvent.click(anchor);

    const optionWrapper = await screen.findByTestId(testIds.optionWrapper);
    const firstOption = optionWrapper.children.item(0);

    expect(firstOption).not.toBeNull();
    fireEvent.click(firstOption as Element);

    await act(async () => rerender(makeComponent()));

    const countries = await screen.findAllByTestId("country-item");
    expect(countries).toHaveLength(3);
  });
});
