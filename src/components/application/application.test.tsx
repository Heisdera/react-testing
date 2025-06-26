import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1, // h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2, // h2
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElementSubStringMatch = screen.getByText("ll fields are", {
      exact: false,
    }); // text match as substring
    expect(paragraphElementSubStringMatch).toBeInTheDocument();

    const paragraphElementRegexMatch = screen.getByText(/all Fields/i); // text match as regex
    expect(paragraphElementRegexMatch).toBeInTheDocument();

    const paragraphElementCustomFuncMatch = screen.getByText((content) =>
      content.startsWith("All")
    ); // text match as custom function
    expect(paragraphElementCustomFuncMatch).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop coding");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameInputElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameInputElement).toBeInTheDocument();

    const nameElementByPlaceholder = screen.getByPlaceholderText("Fullname");
    expect(nameElementByPlaceholder).toBeInTheDocument();

    const nameElementByDisplayValue = screen.getByDisplayValue("Dera");
    expect(nameElementByDisplayValue).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
