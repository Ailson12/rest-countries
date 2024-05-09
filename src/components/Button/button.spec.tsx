import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./index";
import backIcon from "@/assets/back-icon.svg";

describe("Button", () => {
  it("should mount the component", () => {
    expect(() => render(<Button>Send</Button>)).not.toThrow();
  });

  it("should attach an incone", () => {
    render(
      <Button appendIcon={<img src={backIcon} alt="back-icon" />}>Send</Button>
    );
    const icon = screen.queryByAltText("back-icon");
    expect(icon).not.toBeNull();
  });
});
