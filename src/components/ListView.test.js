import React from "react";
import { create, act } from "react-test-renderer";
import ListView from "./ListView";
import {
  TEST_LIST,
  TEST_ITEM_22069310,
  TEST_ITEM_22089166,
  TEST_ITEM_22089546,
  setupFetchErrorMock
} from "../services/data.test";

describe("ListView", () => {
  let element, mockFetch;

  const createElement = async () =>
    act(async () => {
      element = create(<ListView />).toJSON();
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
    element = create(<ListView />).toJSON();

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
      .mockResolvedValueOnce({ json: jest.fn().mockResolvedValue(TEST_LIST) })
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
