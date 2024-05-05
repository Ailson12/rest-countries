import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App component", () => {
  it("should mount the component", () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
