import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";
import { TEST_STORY_22089546 } from "hn-api";

jest.mock("../shared/utils.js");

describe.only("Item", () => {
  test("empty", () => {
    const element = render(<Item />);

    expect(element.container).toMatchSnapshot();
  });

  test("ok", () => {
    const element = render(<Item item={TEST_STORY_22089546} />);

    expect(element.container).toMatchSnapshot();
  });
});
