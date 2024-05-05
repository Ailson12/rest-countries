import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./index";
import { useState } from "react";

const getAttributesByElement = (element: HTMLElement) => {
  return Array.from(element.attributes).reduce((acumulator, item) => {
    acumulator[item.name] = item.value;
    return acumulator;
  }, {} as Record<string, string>);
};

const Wrapper = () => {
  const [value, setValue] = useState("");
  return <Input placeholder="user" value={value} onChange={setValue} />;
};

describe("Input", () => {
  it("should mount the component", () => {
    expect(() => render(<Input />)).not.toThrow();
  });

  it("should attach the properties correctly", async () => {
    const originalAttributes: Record<string, string> = {
      id: "search",
      name: "country",
      placeholder: "Search users..",
    };

    render(<Input {...originalAttributes} />);

    const inputElement = await screen.findByPlaceholderText(
      originalAttributes.placeholder
    );
    const attributes = getAttributesByElement(inputElement);

    for (const key in originalAttributes) {
      expect(attributes).toHaveProperty(key, originalAttributes[key]);
    }
  });

  it("should fill in the input as the user types it in", async () => {
    render(<Wrapper />);

    const inputElement = await screen.findByPlaceholderText<HTMLInputElement>(
      "user"
    );
    const digitizedText = "search test";
    fireEvent.change(inputElement, {
      target: {
        value: digitizedText,
      },
    });

    expect(inputElement.value).toEqual(digitizedText);
  });
});
