import React from "react";
import Item from "./Item";
import { TEST_ITEM_22069310 } from "../services/__mocks__/data";

export default {
  title: "Item",
  component: Item
};

export const ok = () => <Item item={TEST_ITEM_22069310} />;
export const empty = () => <Item />;
