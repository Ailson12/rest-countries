import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Loading } from "./index";

const testId = 'loading-content'

describe('Loading - Component', () => {
  it('should render the load if the isVisible property is equal to true', () => {
    render(<Loading isVisible={true} />)
    const content = screen.queryByTestId(testId)
    expect(content).not.toBeNull();
  })

  it('should not return the load if the isVisible property is false', () => {
    render(<Loading isVisible={false} />)
    const content = screen.queryByTestId(testId)
    expect(content).toBeNull();
  })
})