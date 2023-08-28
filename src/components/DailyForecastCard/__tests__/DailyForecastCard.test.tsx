import React from "react";
import renderer from "react-test-renderer";
import DailyForecastCard from "../index";

describe("DailyForecastCard", () => {
  it('default view', () => {
    const component = renderer.create(<DailyForecastCard min={0} max={0} date="1994-09-01" weatherCode={50} /> );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


