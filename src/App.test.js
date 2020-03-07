import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("ok", async () => {
    const element = render(<App />);

    expect(element.container).toMatchSnapshot();
  });
});
