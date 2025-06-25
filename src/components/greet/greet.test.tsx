import { render, screen } from "@testing-library/react";
import Greet from "./greet";

/**
 * Greet should render the text 'hello'.
 * If a name is passed into the component, it should render 'hello', followed by the name.
 */

describe("Greet", () => {
  test("Greet renders Hello successfully", () => {
    render(<Greet />);
    // const textElement = screen.getByText(/HELLO/i); // this is a regex pattern to ignore case sensitivity
    const textElement = screen.getByText(/Hello/);

    // check if the text "Hello" is present
    expect(textElement).toBeInTheDocument();
  });
});

// Note: --- One file === One test Suite --- (test suites are not determined by describe block) && .only & .skip also applies to describe blocks not just test
