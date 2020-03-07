import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import wait from "waait";
import ListView, { QUERY_LIST_TOP_PAGE_1 } from "./ListView";
import {
  TEST_STORY_22069310,
  TEST_STORY_22089546,
  TEST_STORY_22089166,
  queryListResult
} from "hn-api";

describe("ListView", () => {
  let element;

  const TEST_STORIES = [
    TEST_STORY_22069310,
    TEST_STORY_22089546,
    TEST_STORY_22089166
  ];

  test("loading", () => {
    element = render(
      <MockedProvider mocks={[]}>
        <ListView />
      </MockedProvider>
    );

    expect(element.container).toMatchSnapshot();
  });

  test("ok", async () => {
    const MOCKS = [
      {
        request: {
          query: QUERY_LIST_TOP_PAGE_1
        },
        result: queryListResult(TEST_STORIES, true)
      }
    ];

    element = render(
      <MockedProvider mocks={MOCKS}>
        <ListView />
      </MockedProvider>
    );

    await wait(0);

    expect(element.container).toMatchSnapshot();
  });

  test("error", async () => {
    const MOCKS = [
      {
        request: {
          query: QUERY_LIST_TOP_PAGE_1
        },
        error: new Error("Error")
      }
    ];

    element = render(
      <MockedProvider mocks={MOCKS}>
        <ListView />
      </MockedProvider>
    );

    await wait(0);

    expect(element.container).toMatchSnapshot();
  });
});
