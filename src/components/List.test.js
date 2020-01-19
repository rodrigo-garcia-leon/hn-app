import React from "react";
import { create, act } from "react-test-renderer";
import List from "./List";
import {
  TEST_LIST,
  TEST_ITEM_22069310,
  TEST_ITEM_22089166,
  TEST_ITEM_22089546,
  setupFetchErrorMock
} from "../services/data.test";

describe("List", () => {
  let element, mockFetch;

  const createElement = async () =>
    act(async () => {
      element = create(<List items={TEST_LIST} />).toJSON();
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
    element = create(<List />).toJSON();

    expect(element).toMatchSnapshot();
  });

  test("network error", async () => {
    mockFetch = setupFetchErrorMock();

    await createElement();
    expect(element).toMatchSnapshot();
  });

  test("ok", async () => {
    mockFetch = jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(TEST_ITEM_22069310)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(TEST_ITEM_22089166)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(TEST_ITEM_22089546)
      });

    await createElement();
    expect(element).toMatchSnapshot();
  });
});
