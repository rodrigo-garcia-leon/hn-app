import React, { useState, useEffect } from "react";
import List from "./List";
import { fetchList } from "../services/data";

export const LIST_TOP = "top";
const SLICE_START = 0;
const SLICE_END = 30;

function ListView() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const items = await fetchList(LIST_TOP);
        const slice = items.slice(SLICE_START, SLICE_END);

        setItems(slice);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return <List items={items} />;
}

export default ListView;
