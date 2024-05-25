import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should activate light theme if the current theme is dark", async () => {
    render(
      renderSetup({
        component: <Navbar />,
      })
    );

    const themeButton = await screen.findByText(/ativar modo/i);
    const themeIsLight = themeButton.textContent
      ?.toLowerCase()
      .includes("ativar modo claro");

    fireEvent.click(themeButton);

    expect(themeButton.textContent?.toLowerCase()).toMatch(
      themeIsLight ? "escuro" : "claro"
    );
  });
});
