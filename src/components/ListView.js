import React, { useState, useEffect } from "react";
import Item from "./Item";
import { fetchList } from "../services/data";
import "./ListView.css";

const LIST_TOP = "top";
const SLICE_START = 0;
const SLICE_END = 30;

function ListView() {
  const [items, setItems] = useState([]);

  async function loadData() {
    const items = await fetchList(LIST_TOP);
    const slice = items.slice(SLICE_START, SLICE_END);

    setItems(slice);
  }

  useEffect(() => {
    loadData();
  });

  return (
    <section className="ListView">
      <ol>
        {items.map(item => (
          <li key={item}>
            <Item id={item}></Item>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ListView;
