import React from "react";
import { create, act } from "react-test-renderer";
import ItemView from "./ItemView";
import {
  setupFetchItemOkMock,
  setupFetchErrorMock
} from "../services/data.test";
import { TEST_ITEM_22069310 } from "../services/__mocks__/data";

jest.mock("../shared/utils.js");

describe("ItemView", () => {
  let element, mockFetch;

  const createElement = async () =>
    act(async () => {
      element = create(<ItemView id={TEST_ITEM_22069310.id} />);
    });

  beforeEach(() => {
    mockFetch = null;
  });

  afterEach(() => {
    if (mockFetch) {
      mockFetch.mockRestore();
    }
  });

  test("empty", () => {
    element = create(<ItemView />).toJSON();

    expect(element).toMatchSnapshot();
  });

  test("ok", async () => {
    mockFetch = setupFetchItemOkMock();

    await createElement();
    expect(element.toJSON()).toMatchSnapshot();
  });

  test("network error", async () => {
    mockFetch = setupFetchErrorMock();

    await createElement();
    expect(element.toJSON()).toMatchSnapshot();
  });
});
