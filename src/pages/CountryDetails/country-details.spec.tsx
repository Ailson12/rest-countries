import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CountryDetails } from ".";
import { Route, Routes } from "react-router-dom";
import { renderSetup } from "@/helpers/render-setup.helper";

type Params = {
  ccn3?: string;
};

const makeComponent = (params: Params = {}) => {
  const { ccn3 = "071" } = params;

  return renderSetup({
    addMemoryRouter: true,
    paramsMemoryRouter: {
      initialEntries: [`/details/${ccn3}`],
    },
    component: (
      <Routes>
        <Route path="details/:ccn3" element={<CountryDetails />} />
      </Routes>
    ),
  });
};

// Mock do useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("CountryDetails", () => {
  it("should mount the component", () => {
    expect(() => {
      render(makeComponent());
    }).not.toThrow();
  });

  it("should show a load while the data is loaded and then disappear when finished", async () => {
    render(makeComponent());

    const loadingElement = screen.queryByTestId("loading-content");
    expect(loadingElement).not.toBe(null);

    await waitForElementToBeRemoved(loadingElement);
  });

  it("should render the country when the search completes", async () => {
    render(makeComponent());
    const countryName = await screen.findByText(/brasil/i);

    expect(countryName.textContent).toEqual("Brasil");
  });

  it('should return to the home page when the "back" button is clicked', async () => {
    render(makeComponent());

    const buttonIcon = await screen.findByText(/voltar/i);
    fireEvent.click(buttonIcon);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should display a message if the country is not found", async () => {
    render(
      makeComponent({
        ccn3: "invalid",
      })
    );

    await screen.findByTestId("message-not-found");
  });
});
