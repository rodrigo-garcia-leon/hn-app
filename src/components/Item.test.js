import React from "react";
import { create } from "react-test-renderer";
import Item from "./Item";
import { TEST_ITEM_22069310 } from "../services/__mocks__/data";

jest.mock("../shared/utils.js");

describe("Item", () => {
  test("empty", () => {
    const element = create(<Item />).toJSON();

    expect(element).toMatchSnapshot();
  });

  test("ok", () => {
    const element = create(<Item item={TEST_ITEM_22069310} />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
