import React, { useState, useEffect } from "react";
import { fetchItem } from "../services/data";
import { formatTime } from "../shared/utils";
import "./Item.css";

function Item({ id }) {
  const [item, setItem] = useState(null);

  async function loadData() {
    const item = await fetchItem(id);

    setItem(item);
  }

  useEffect(() => {
    loadData();
  });

  if (!item) {
    return null;
  }

  const {
    by,
    // kids,
    score,
    time,
    title
    // url
  } = item;

  return (
    <section className="Item">
      <h1>{title}</h1>
      <h2>
        {score} points by {by} {formatTime(time)} ago
      </h2>
    </section>
  );
}

export default Item;
