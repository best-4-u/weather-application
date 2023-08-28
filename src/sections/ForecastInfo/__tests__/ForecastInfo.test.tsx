import React from "react";
import { render, screen, within } from '@testing-library/react';
import { Provider } from "react-redux";
import ForecastInfo from "../index";
import { store } from "../../../store/store";

describe("DailyForecastCard", () => {
  it('renders default view without selected location', () => {
    render(
        <Provider store={store}>
          <ForecastInfo />
        </Provider>
      );
    
    const { getByText } = within(screen.getByRole("heading"));
    expect(getByText("Welcome to MY FORECAST page!")).toBeInTheDocument();
  });
});


