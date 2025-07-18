import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  // test("renders a count of 2 after clicking the increment button twice", async () => {
  //   user.setup();

  //   render(<Counter />);

  //   const incrementButton = screen.getByRole("button");
  //   await user.dblClick(incrementButton);

  //   const countElement = screen.getByRole("heading");
  //   expect(countElement).toHaveTextContent("2");
  // });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("element are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

/**Convenience APIs
 * - click()
 * - dblClick()
 * - tripleClick()
 * - hover()
 * - unhover()
 */

/** Convenience API
 * - tab()
 */

/** Utility APIs
 * - clear() - clear editable elements
 * - selectOptions() - select items in a select dropdown or listbox where you can select multiple elements
 * - deselectOptions()
 * - upload()
 * - type() -
 */

/**Clipboard APIs
 * - copy()
 * - cut()
 * - paste()
 */

/**Keyboard APIs
 * - keyboard('foo') // translates to: f, o, o
 * - keyboard('{shift>}A{/Shift}') // translates to: Shift(down), A, Shift(up)
 */
