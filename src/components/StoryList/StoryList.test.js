/* eslint-env jest */
import React from "react";
import {
  render,
  cleanup,
} from "react-testing-library";

// Test specific imports
import StoryList from "./StoryList";
import storiesMock from "Mocks/storiesMock";

afterEach(cleanup);

test("renders 30 items", () => {
  const { container } = render(<StoryList stories={storiesMock} />);

  expect(container.firstChild.children.length).toBe(30);
  expect(container).toMatchSnapshot();
});
