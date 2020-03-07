import React from "react";
import { render } from "@testing-library/react";
import List from "./List";
import {
  TEST_STORY_22069310,
  TEST_STORY_22089546,
  TEST_STORY_22089166
} from "hn-api";

jest.mock("../shared/utils.js");

describe.only("List", () => {
  test("empty", () => {
    const element = render(<List />);

    expect(element.container).toMatchSnapshot();
  });

  test("ok", () => {
    const LIST = [
      TEST_STORY_22069310,
      TEST_STORY_22089546,
      TEST_STORY_22089166
    ];

    const element = render(<List items={LIST} />);

    expect(element.container).toMatchSnapshot();
  });
});
