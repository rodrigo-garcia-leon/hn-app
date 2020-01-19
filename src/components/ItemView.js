import React, { useState, useEffect } from "react";
import { fetchItem } from "../services/data";
import Item from "./Item.js";

function ItemView({ id }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const item = await fetchItem(id);
        setItem(item);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, [id]);

  return <Item item={item} />;
}

export default ItemView;
