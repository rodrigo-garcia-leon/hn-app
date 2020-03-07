import React from "react";
import { formatTime } from "../shared/utils";
import "./Item.css";

function Item({ item }) {
  if (!item) {
    return null;
  }

  const { by, score, time, title } = item;

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
