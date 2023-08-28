import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../index";

describe("NavBar", () => {
  it("default view", () => {
    const component = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
