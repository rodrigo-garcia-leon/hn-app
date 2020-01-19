import React from "react";
import ItemView from "./ItemView";
import "./List.css";

function List({ items }) {
  if (!items) {
    return null;
  }

  return (
    <section className="List">
      <ol>
        {items.map(item => (
          <li key={item}>
            <ItemView id={item}></ItemView>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default List;
