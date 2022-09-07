import '../App.css';

import React, {useEffect, useState} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, {initial})

    return(
        <div className="counter">
            <button className="btn btn-info" disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="btn btn-info" disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className="btn btn-primary" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;

/* import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);

  function aumentar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function disminuir() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    if (count <= stock) {
      setStock(stock - count);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
          <button onClick={disminuir}>-</button>
          <input type="text" value={count} />
          <button onClick={aumentar}>+</button>
        <p className="text-center">
          <button className="btn btn-primary mt-2" onClick={onAdd}>
            Agregar al carrito
          </button>
        </p>
        <p className="text-center">
          El stock <b>disponible</b> es: {stock} unidades
        </p>
      </div>
    </div>
  );
};

export default ItemCount; */
