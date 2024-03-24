import { render } from "@testing-library/react"
import { axe } from "jest-axe"

import { PrintPage, IPrintPageProps } from "./PrintPage"

describe("Component: PrintPage", () => {
  let mockProps: IPrintPageProps

  beforeEach(() => {
    mockProps = {}
  })

  describe("Accessibility", () => {
    it("should have no accessibility violations", async () => {
      const { container } = render(<PrintPage {...mockProps} />)
      expect(
        await axe(container, {
          rules: {
            region: { enabled: false },
          },
        })
      ).toHaveNoViolations()
    })
  })

  describe("Default Behavior", () => {
    it("should render without error", () => {
      const { container } = render(<PrintPage {...mockProps} />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe("Prop Behavior", () => {
    it.todo("should __DO_SOMETHING__") //, () => {})
  })

  describe("Interactions", () => {
    it.todo("should __DO_SOMETHING__") //, () => {})
  })
})
