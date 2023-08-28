import React from "react";
import { render, screen, within } from '@testing-library/react';
import EmptyForecast from "../index";

describe("DailyForecastCard", () => {
  it('renders default view', () => {
    render(<EmptyForecast />);
    
    const { getByText } = within(screen.getByRole("heading"));
    expect(getByText("Welcome to MY FORECAST page!")).toBeInTheDocument();
  });
});


