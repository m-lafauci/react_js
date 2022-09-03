import React from "react";
import ItemCount from "./ItemCount";
import '../App.css';


const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;


