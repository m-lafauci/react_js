import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";

const products = [ {"id": 1, "nombreProducto": "BUZO BLOOM", "categoria": "BUZOS", "precio": 10700, "imagen": "./assets/buzo1.jpg", "stock": 2} ]

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = products[0];
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;