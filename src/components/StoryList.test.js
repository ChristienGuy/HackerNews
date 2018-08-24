/* eslint-env jest */
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import StoryList from "./StoryList";

import style from "./StoryPreview.css";

import storiesMock from "Mocks/storiesMock";

afterEach(cleanup);

test("renders 30 items", () => {
  const { container } = render(<StoryList stories={storiesMock} />);
  console.log(style);

  console.log(container);
});
