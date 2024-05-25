import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./index";
import { renderSetup } from "@/helpers/render-setup.helper";

describe("Navbar - Component", () => {
  it("should mount the component with title", async () => {
    render(
      renderSetup({
        component: <Navbar />,
      })
    );
    const title = await screen.findByTestId("title");
    expect(title).toBeDefined();
  });
});
