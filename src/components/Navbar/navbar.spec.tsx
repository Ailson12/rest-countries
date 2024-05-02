import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./index";

describe("Navbar - Component", () => {
  it("should mount the component with title", async () => {
    render(<Navbar />);
    const title = await screen.findByTestId('title')
    expect(title).toBeDefined();
  });
});
