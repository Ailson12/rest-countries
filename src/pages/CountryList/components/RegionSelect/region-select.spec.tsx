import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RegionSelect } from "./index";
import { testIds } from "@/components/Select/testIds";

describe('Region Select', () => {
  it('must mount the component', () => {
    expect(() => render(<RegionSelect />)).not.toThrow()
  })

  it('must populate the region variable according to the option selected', async () => {
    render(<RegionSelect />)

    const anchor = await screen.findByTestId(testIds.anchor)
    fireEvent.click(anchor)

    const africaOption = await screen.findByText('África')
    fireEvent.click(africaOption)

    const contentAnchor = anchor.children.item(0)
    expect(contentAnchor?.textContent).toEqual('África')
  })
})