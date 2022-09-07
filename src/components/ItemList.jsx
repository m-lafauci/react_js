import React from "react";
import Item from "./Item";

const ItemList = ({ productos = [] }) => {
  return productos.map((items) => <Item key={items.id} info={items} />);
};

export default ItemList;