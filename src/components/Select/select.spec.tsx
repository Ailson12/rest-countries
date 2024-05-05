import { Select } from "./index";
import { testIds } from "./testIds";
import { describe, expect, it, vi } from "vitest";
import { SelectOptionType } from "@/types/select";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

const defaultOptions: SelectOptionType[] = [
  {
    legend: "Robert",
    value: "1",
  },
  {
    legend: "Jhon",
    value: "2",
  },
  {
    legend: "Mike",
    value: "3",
  },
];

type Props = {
  options?: SelectOptionType[]
}

const Wrapper = ({ options = defaultOptions }: Props) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <Select
      title="Users"
      options={options}
      value={user}
      onChange={(value) => setUser(value)}
    />
  );
};

describe("Select - Component", () => {
  it("must mount the component", () => {
    render(<Wrapper />);

    const anchor = screen.queryByTestId(testIds.anchor);
    expect(anchor).toBeTruthy();
  });

  it("the list of options should start hidden", () => {
    render(<Wrapper />);

    const optionWrapper = screen.queryByTestId(testIds.optionWrapper);
    expect(optionWrapper).toBeTruthy();

    const display = optionWrapper?.getAttribute("display");
    expect(display).toEqual("none");
  });

  it("the list of options must be the same as the one supplied to the component", () => {
    render(<Wrapper />);

    const optionWrapper = screen.queryByTestId(testIds.optionWrapper);
    expect(optionWrapper).toBeTruthy();
    expect(optionWrapper?.children).toHaveLength(defaultOptions.length);
  });

  it("must use the selected option as the title", async () => {
    render(<Wrapper />);

    const { legend } = defaultOptions[0];

    const optionElement = await screen.findByText(legend);
    fireEvent.click(optionElement);

    const anchor = await screen.findByTestId(testIds.anchor);
    const title = anchor.children.item(0)?.textContent;

    expect(title).toEqual(legend);
  });

  it("the list of options must have the “value” field as unique", () => {
    const optionsDuplicated = [
      {
        legend: 'Robert',
        value: '1'
      },
      {
        legend: 'Mike',
        value: '1'
      }
    ] satisfies SelectOptionType[]

    const consoleMock = vi.spyOn(console, 'error').mockImplementation(() => undefined)

    render(<Wrapper options={optionsDuplicated} />);

    // checks if a function has been called with certain parameters 
    expect(consoleMock).toHaveBeenLastCalledWith('options duplicated!')
  });

  it("the list of options should be displayed when the user clicks on the anchor", async () => {
    render(<Wrapper />);

    const anchor = await screen.findByTestId(testIds.anchor);
    fireEvent.click(anchor)

    const optionWrapper = await screen.findByTestId(testIds.optionWrapper);
    const display = optionWrapper.getAttribute('display')

    expect(display).toEqual('block')
  });

  it("should hide the list of options when the user clicks outside the list", async () => {
    render(<Wrapper />);

    const anchor = await screen.findByTestId(testIds.anchor);
    fireEvent.click(anchor)

    const backgroundOption = await screen.findByTestId(testIds.backgroundOption)
    fireEvent.click(backgroundOption)

    const optionWrapper = await screen.findByTestId(testIds.optionWrapper);
    const display = optionWrapper.getAttribute('display')

    expect(display).toEqual('none')
  });

  it('no clear icon should appear if no option is selected', () => {
    render(<Wrapper />);
    const icon = screen.queryByAltText('close icon')
    expect(icon).toBeNull()
  })

  it('an icon should appear to clear the value when an option is selected', async () => {
    render(<Wrapper />);

    const anchor = await screen.findByTestId(testIds.anchor);
    fireEvent.click(anchor)

    const { legend } = defaultOptions[0];
    const optionElement = await screen.findByText(legend);

    fireEvent.click(optionElement);

    const icon = screen.queryByAltText('close icon')
    expect(icon).toBeTruthy()
  })

  it('should return to the initial title when an option is selected', async () => {
    render(<Wrapper />);
    
    const anchor = await screen.findByTestId(testIds.anchor);
    fireEvent.click(anchor)

    const { legend } = defaultOptions[0];
    const optionElement = await screen.findByText(legend);

    fireEvent.click(optionElement);

    const icon = await screen.findByAltText('close icon')
    fireEvent.click(icon)

    const firstChild = anchor.children.item(0)
    expect(firstChild?.textContent).toEqual('Users')
  })
});
