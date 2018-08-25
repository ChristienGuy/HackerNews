/* eslint-env jest */
import React from "react";
import {
  render,
  cleanup,
} from "react-testing-library";

// Test specific imports
import Home from "./Home";

afterEach(cleanup);

// TODO: mock api request and response
test('should ', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
});
