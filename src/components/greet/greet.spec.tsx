import { render, screen } from "@testing-library/react";
import Greet from "./greet";

/**
 * Greet should render the text 'hello'.
 * If a name is passed into the component, it should render 'hello', followed by the name.
 */

describe("Greet", () => {
  it("Greet renders Hello successfully", () => {
    render(<Greet />);
    // const textElement = screen.getByText(/HELLO/i); // this is a regex pattern to ignore case sensitivity
    const textElement = screen.getByText("Hello");

    // check if the text "Hello" is present
    expect(textElement).toBeInTheDocument();
  });

  fit("Test only - Greet renders Hello Dera successfully", () => {
    render(<Greet name="Dera" />);

    const textElement = screen.getByText("Hello Dera");

    // check if the text "Hello Dera" is present
    expect(textElement).toBeInTheDocument();
  });

  xit("Test skip - Greet renders Hello Dera successfully", () => {
    render(<Greet name="Dera" />);

    const textElement = screen.getByText("Hello Dera");

    // check if the text "Hello Dera" is present
    expect(textElement).toBeInTheDocument();
  });
});

// Note: --- it can be used instead of test ---
// Note: --- fit can be used instead of test.only ---
// Note: --- xit can be used instead of test.skip ---
