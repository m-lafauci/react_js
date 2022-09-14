import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const product = [
    {"id": 1, "nombreProducto": "BUZO BLOOM", "categoria": "BUZOS", "precio": 10700, "imagen": "/buzo1.jpg", "stock": 2},
    {"id": 2, "nombreProducto": "BUZO LIAM", "categoria": "BUZOS", "precio": 13900, "imagen": "/buzo2.jpg", "stock": 3},
    {"id": 3, "nombreProducto": "BUZO ROSE", "categoria": "BUZOS", "precio": 16500, "imagen": "/buzo3.jpg", "stock": 4},
    {"id": 4, "nombreProducto": "BUZO DEAN", "categoria": "BUZOS", "precio": 11000, "imagen": "/buzo4.jpg", "stock": 2},
    {"id": 5, "nombreProducto": "BUZO LUCIEN", "categoria": "BUZOS", "precio": 9900, "imagen": "/buzo5.jpg", "stock": 3},
    {"id": 6, "nombreProducto": "MUSCULOSA COMFY", "categoria": "MUSCULOSAS", "precio": 4500, "imagen": "/musculosa1.jpg", "stock": 4},
    {"id": 7, "nombreProducto": "MUSCULOSA JERRY", "categoria": "MUSCULOSAS", "precio": 7300, "imagen": "/musculosa2.jpg", "stock": 2},
    {"id": 8, "nombreProducto": "MUSCULOSA JOSIE", "categoria": "MUSCULOSAS", "precio": 7600, "imagen": "/musculosa3.jpg", "stock": 3},
    {"id": 9, "nombreProducto": "MUSCULOSA LUCIEN", "categoria": "MUSCULOSAS", "precio": 6600, "imagen": "/musculosa4.jpg", "stock": 4},
    {"id": 10, "nombreProducto": "MUSCULOSA WAFLE", "categoria": "MUSCULOSAS", "precio": 6900, "imagen": "/musculosa5.jpg", "stock": 2},
    {"id": 11, "nombreProducto": "CAMISA BRIANA", "categoria": "CAMISAS", "precio": 11800, "imagen": "/camisa1.jpg", "stock": 3},
    {"id": 12, "nombreProducto": "CAMISA MARGARITA", "categoria": "CAMISAS", "precio": 20000, "imagen": "/camisa2.jpg", "stock": 4},
    {"id": 13, "nombreProducto": "CAMISA MARKLE", "categoria": "CAMISAS", "precio": 12000, "imagen": "/camisa3.jpg", "stock": 2},
    {"id": 14, "nombreProducto": "CAMISA PHIL", "categoria": "CAMISAS", "precio": 17500, "imagen": "/camisa4.jpg", "stock": 3},
    {"id": 15, "nombreProducto": "CAMISA SOHO", "categoria": "CAMISAS", "precio": 16800, "imagen": "/camisa5.jpg", "stock": 4},
    {"id": 16, "nombreProducto": "CAMPERA BIKER", "categoria": "CAMPERAS", "precio": 39000, "imagen": "/campera1.jpg", "stock": 2},
    {"id": 17, "nombreProducto": "CAMPERA FOWLER", "categoria": "CAMPERAS", "precio": 38000, "imagen": "/campera2.jpg", "stock": 3},
    {"id": 18, "nombreProducto": "CAMPERA MADISON", "categoria": "CAMPERAS", "precio": 47000, "imagen": "/campera3.jpg", "stock": 4},
    {"id": 19, "nombreProducto": "CAMPERA PUFFER", "categoria": "CAMPERAS", "precio": 44000, "imagen": "/campera4.jpg", "stock": 2},
    {"id": 20, "nombreProducto": "CHALECO SMITH", "categoria": "CAMPERAS", "precio": 41000, "imagen": "/campera5.jpg", "stock": 3},
    {"id": 21, "nombreProducto": "PANTALON PAUL", "categoria": "PANTALONES", "precio": 12600, "imagen": "/pantalon1.jpg", "stock": 4},
    {"id": 22, "nombreProducto": "PANTALON ROSE", "categoria": "PANTALONES", "precio": 13000, "imagen": "/pantalon2.jpg", "stock": 2},
    {"id": 23, "nombreProducto": "PANTALON BASTIAN", "categoria": "PANTALONES", "precio": 13300, "imagen": "/pantalon3.jpg", "stock": 3},
    {"id": 24, "nombreProducto": "PANTALON ELENA", "categoria": "PANTALONES", "precio": 16500, "imagen": "/pantalon4.jpg", "stock": 4},
    {"id": 25, "nombreProducto": "PANTALON MARGARET", "categoria": "PANTALONES", "precio": 13900, "imagen": "/pantalon5.jpg", "stock": 2},
    {"id": 26, "nombreProducto": "REMERA CHILD", "categoria": "REMERAS", "precio": 5500, "imagen": "/remera1.jpg", "stock": 3},
    {"id": 27, "nombreProducto": "REMERA FAIRY", "categoria": "REMERAS", "precio": 8300, "imagen": "/remera2.jpg", "stock": 4},
    {"id": 28, "nombreProducto": "REMERA FELI", "categoria": "REMERAS", "precio": 8600, "imagen": "/remera3.jpg", "stock": 2},
    {"id": 29, "nombreProducto": "REMERA JUSTINA", "categoria": "REMERAS", "precio": 7600, "imagen": "/remera4.jpg", "stock": 3},
    {"id": 30, "nombreProducto": "REMERA MONACO", "categoria": "REMERAS", "precio": 7900, "imagen": "/remera5.jpg", "stock": 4},
    {"id": 31, "nombreProducto": "SWEATER CAPE", "categoria": "SWEATERS", "precio": 22000, "imagen": "/sweater1.jpg", "stock": 2},
    {"id": 32, "nombreProducto": "SWEATER JANDIRA", "categoria": "SWEATERS", "precio": 12000, "imagen": "/sweater2.jpg", "stock": 3},
    {"id": 33, "nombreProducto": "SWEATER MONZON", "categoria": "SWEATERS", "precio": 20000, "imagen": "/sweater3.jpg", "stock": 4},
    {"id": 34, "nombreProducto": "SWEATER STRIPES", "categoria": "SWEATERS", "precio": 12300, "imagen": "/sweater4.jpg", "stock": 2},
    {"id": 35, "nombreProducto": "SWEATER SUNRAY", "categoria": "SWEATERS", "precio": 14000, "imagen": "/sweater5.jpg", "stock": 3},
    {"id": 36, "nombreProducto": "VESTIDO ANUSH", "categoria": "VESTIDOS", "precio": 13900, "imagen": "/vestido1.jpg", "stock": 4},
    {"id": 37, "nombreProducto": "VESTIDO CAROL", "categoria": "VESTIDOS", "precio": 18800, "imagen": "/vestido2.jpg", "stock": 2},
    {"id": 38, "nombreProducto": "VESTIDO CROWN", "categoria": "VESTIDOS", "precio": 15900, "imagen": "/vestido3.jpg", "stock": 3},
    {"id": 39, "nombreProducto": "VESTIDO IMMA", "categoria": "VESTIDOS", "precio": 14400, "imagen": "/vestido4.jpg", "stock": 4},
    {"id": 40, "nombreProducto": "VESTIDO JANICE", "categoria": "VESTIDOS", "precio": 37500, "imagen": "/vestido5.jpg", "stock": 2}
];

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { detalleId } = useParams(); 

    useEffect(() => {
        const getItem = new Promise(resolve => {
                setTimeout(() => {
                    resolve(product);
                }, 100);
            });

        getItem.then(res => setItem(res.find(articulo => articulo.id === parseInt(detalleId))));

    }, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;