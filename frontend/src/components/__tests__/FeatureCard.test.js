import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureCard from "../FeatureCard";
import { TestRouter } from "../../test-utils";

describe("FeatureCard", () => {
  const mockProps = {
    title: "Budget Insights",
    description: "View detailed breakdowns of your income and expenses.",
    image: "test-image.png"
  };

  it("renders the title and description", () => {
    render(<TestRouter><FeatureCard {...mockProps} /></TestRouter>);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("renders the image with alt text", () => {
    render(<TestRouter><FeatureCard {...mockProps} /></TestRouter>);
    
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProps.image);
    expect(img).toHaveAttribute("alt", mockProps.title);
  });
});