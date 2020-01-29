import React from "react";
import Item from "./Item";
import "./List.css";

function List({ items }) {
  if (!items) {
    return null;
  }

  return (
    <section className="List">
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <Item item={item}></Item>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default List;
