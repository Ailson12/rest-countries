import { CountryCard } from ".";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { numberFormat } from "@/helpers/number-format.helper";
import { MemoryRouter } from "react-router-dom";

const makeComponent = () => {
  const image = {
    url: "https://flagcdn.com/br.svg",
  };

  const props = {
    image,
    name: "Brazil",
    capital: "Brasília",
    region: "Americas",
    population: 1200,
    ccn3: '076',
  };

  return {
    props,
    component: (
      <MemoryRouter>
        <CountryCard {...props} />
      </MemoryRouter>
    ),
  };
};

// Mock do useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Coutry Card", () => {
  it("should display the image of the country", async () => {
    const { props, component } = makeComponent();
    render(component);

    const imageElement = await screen.findByRole<HTMLImageElement>("img");

    expect(imageElement).toBeDefined();
    expect(imageElement.src).toEqual(props.image.url);
  });

  it("must display the name, region and capital of the country", () => {
    const { props, component } = makeComponent();
    render(component);

    const coutryName = screen.queryByText(props.name);
    const region = screen.queryByText(props.region);
    const capital = screen.queryByText(props.capital);

    expect(coutryName).not.toBeNull();
    expect(coutryName?.textContent).toEqual(props.name);

    expect(region).not.toBeNull();
    expect(region?.textContent).toEqual(props.region);

    expect(capital).not.toBeNull();
    expect(capital?.textContent).toEqual(props.capital);
  });

  it("must be given a numerical value and converted to the Brazilian standard", () => {
    const { props, component } = makeComponent();
    render(component);

    const formattedPopulation = numberFormat(props.population);
    const populationElement = screen.queryByText(formattedPopulation);

    expect(populationElement).not.toBeNull();
    expect(populationElement?.textContent).toEqual(formattedPopulation);
  });

  it("should display the name of the country if the image is not loaded", async () => {
    const { props, component } = makeComponent();
    render(component);

    const imageElement = await screen.findByRole<HTMLImageElement>("img");
    expect(imageElement.alt).toEqual(props.name);
  });

  it('should redirect to a page with details of the selected country when any child element is clicked on', async () => {
    const { props, component } = makeComponent();
    render(component);

    const imageElement = await screen.findByRole<HTMLImageElement>("img");
    fireEvent.click(imageElement)

    // checks if a function has been called at least once with certain parameters
    expect(mockNavigate).toHaveBeenCalledWith(`/detail/${props.ccn3}`);
  })
});
