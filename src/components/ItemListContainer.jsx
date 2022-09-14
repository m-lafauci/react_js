import '../App.css';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const items = [
    {"id": 1, "nombreProducto": "BUZO BLOOM", "categoria": "BUZOS", "precio": 10700, "imagen": "./assets/buzo1.jpg", "stock": 2},
    {"id": 2, "nombreProducto": "BUZO LIAM", "categoria": "BUZOS", "precio": 13900, "imagen": "./assets/buzo2.jpg", "stock": 3},
    {"id": 3, "nombreProducto": "BUZO ROSE", "categoria": "BUZOS", "precio": 16500, "imagen": "./assets/buzo3.jpg", "stock": 4},
    {"id": 4, "nombreProducto": "BUZO DEAN", "categoria": "BUZOS", "precio": 11000, "imagen": "./assets/buzo4.jpg", "stock": 2},
    {"id": 5, "nombreProducto": "BUZO LUCIEN", "categoria": "BUZOS", "precio": 9900, "imagen": "./assets/buzo5.jpg", "stock": 3},
    {"id": 6, "nombreProducto": "MUSCULOSA COMFY", "categoria": "MUSCULOSAS", "precio": 4500, "imagen": "./assets/musculosa1.jpg", "stock": 4},
    {"id": 7, "nombreProducto": "MUSCULOSA JERRY", "categoria": "MUSCULOSAS", "precio": 7300, "imagen": "./assets/musculosa2.jpg", "stock": 2},
    {"id": 8, "nombreProducto": "MUSCULOSA JOSIE", "categoria": "MUSCULOSAS", "precio": 7600, "imagen": "./assets/musculosa3.jpg", "stock": 3},
    {"id": 9, "nombreProducto": "MUSCULOSA LUCIEN", "categoria": "MUSCULOSAS", "precio": 6600, "imagen": "./assets/musculosa4.jpg", "stock": 4},
    {"id": 10, "nombreProducto": "MUSCULOSA WAFLE", "categoria": "MUSCULOSAS", "precio": 6900, "imagen": "./assets/musculosa5.jpg", "stock": 2},
    {"id": 11, "nombreProducto": "CAMISA BRIANA", "categoria": "CAMISAS", "precio": 11800, "imagen": "./assets/camisa1.jpg", "stock": 3},
    {"id": 12, "nombreProducto": "CAMISA MARGARITA", "categoria": "CAMISAS", "precio": 20000, "imagen": "./assets/camisa2.jpg", "stock": 4},
    {"id": 13, "nombreProducto": "CAMISA MARKLE", "categoria": "CAMISAS", "precio": 12000, "imagen": "./assets/camisa3.jpg", "stock": 2},
    {"id": 14, "nombreProducto": "CAMISA PHIL", "categoria": "CAMISAS", "precio": 17500, "imagen": "./assets/camisa4.jpg", "stock": 3},
    {"id": 15, "nombreProducto": "CAMISA SOHO", "categoria": "CAMISAS", "precio": 16800, "imagen": "./assets/camisa5.jpg", "stock": 4},
    {"id": 16, "nombreProducto": "CAMPERA BIKER", "categoria": "CAMPERAS", "precio": 39000, "imagen": "./assets/campera1.jpg", "stock": 2},
    {"id": 17, "nombreProducto": "CAMPERA FOWLER", "categoria": "CAMPERAS", "precio": 38000, "imagen": "./assets/campera2.jpg", "stock": 3},
    {"id": 18, "nombreProducto": "CAMPERA MADISON", "categoria": "CAMPERAS", "precio": 47000, "imagen": "./assets/campera3.jpg", "stock": 4},
    {"id": 19, "nombreProducto": "CAMPERA PUFFER", "categoria": "CAMPERAS", "precio": 44000, "imagen": "./assets/campera4.jpg", "stock": 2},
    {"id": 20, "nombreProducto": "CHALECO SMITH", "categoria": "CAMPERAS", "precio": 41000, "imagen": "./assets/campera5.jpg", "stock": 3},
    {"id": 21, "nombreProducto": "PANTALON PAUL", "categoria": "PANTALONES", "precio": 12600, "imagen": "./assets/pantalon1.jpg", "stock": 4},
    {"id": 22, "nombreProducto": "PANTALON ROSE", "categoria": "PANTALONES", "precio": 13000, "imagen": "./assets/pantalon2.jpg", "stock": 2},
    {"id": 23, "nombreProducto": "PANTALON BASTIAN", "categoria": "PANTALONES", "precio": 13300, "imagen": "./assets/pantalon3.jpg", "stock": 3},
    {"id": 24, "nombreProducto": "PANTALON ELENA", "categoria": "PANTALONES", "precio": 16500, "imagen": "./assets/pantalon4.jpg", "stock": 4},
    {"id": 25, "nombreProducto": "PANTALON MARGARET", "categoria": "PANTALONES", "precio": 13900, "imagen": "./assets/pantalon5.jpg", "stock": 2},
    {"id": 26, "nombreProducto": "REMERA CHILD", "categoria": "REMERAS", "precio": 5500, "imagen": "./assets/remera1.jpg", "stock": 3},
    {"id": 27, "nombreProducto": "REMERA FAIRY", "categoria": "REMERAS", "precio": 8300, "imagen": "./assets/remera2.jpg", "stock": 4},
    {"id": 28, "nombreProducto": "REMERA FELI", "categoria": "REMERAS", "precio": 8600, "imagen": "./assets/remera3.jpg", "stock": 2},
    {"id": 29, "nombreProducto": "REMERA JUSTINA", "categoria": "REMERAS", "precio": 7600, "imagen": "./assets/remera4.jpg", "stock": 3},
    {"id": 30, "nombreProducto": "REMERA MONACO", "categoria": "REMERAS", "precio": 7900, "imagen": "./assets/remera5.jpg", "stock": 4},
    {"id": 31, "nombreProducto": "SWEATER CAPE", "categoria": "SWEATERS", "precio": 22000, "imagen": "./assets/sweater1.jpg", "stock": 2},
    {"id": 32, "nombreProducto": "SWEATER JANDIRA", "categoria": "SWEATERS", "precio": 12000, "imagen": "./assets/sweater2.jpg", "stock": 3},
    {"id": 33, "nombreProducto": "SWEATER MONZON", "categoria": "SWEATERS", "precio": 20000, "imagen": "./assets/sweater3.jpg", "stock": 4},
    {"id": 34, "nombreProducto": "SWEATER STRIPES", "categoria": "SWEATERS", "precio": 12300, "imagen": "./assets/sweater4.jpg", "stock": 2},
    {"id": 35, "nombreProducto": "SWEATER SUNRAY", "categoria": "SWEATERS", "precio": 14000, "imagen": "./assets/sweater5.jpg", "stock": 3},
    {"id": 36, "nombreProducto": "VESTIDO ANUSH", "categoria": "VESTIDOS", "precio": 13900, "imagen": "./assets/vestido1.jpg", "stock": 4},
    {"id": 37, "nombreProducto": "VESTIDO CAROL", "categoria": "VESTIDOS", "precio": 18800, "imagen": "./assets/vestido2.jpg", "stock": 2},
    {"id": 38, "nombreProducto": "VESTIDO CROWN", "categoria": "VESTIDOS", "precio": 15900, "imagen": "./assets/vestido3.jpg", "stock": 3},
    {"id": 39, "nombreProducto": "VESTIDO IMMA", "categoria": "VESTIDOS", "precio": 14400, "imagen": "./assets/vestido4.jpg", "stock": 4},
    {"id": 40, "nombreProducto": "VESTIDO JANICE", "categoria": "VESTIDOS", "precio": 37500, "imagen": "./assets/vestido5.jpg", "stock": 2}
];

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams();
  
    useEffect(() => {
      const obtenerProductos = new Promise(resolve => {
        setTimeout(() => {
          resolve(items);
        }, 1000);
      });

      if (categoriaId) {
        obtenerProductos.then(res => setProductos(res.filter(item => item.categoria === categoriaId)));
      }else{
        obtenerProductos.then(res => setProductos(res));
      }
    }, [categoriaId]);
  
    return (
      <div className="container">
        <div className="row">
          <ItemList productos={productos} />
        </div>
  
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">{props.texto}</p>
            </div>
          </div>
          {<div className="row">
            <div className="col-md-4">
              {<ItemCount stock="5" initial={1} />}
            </div>
          </div>}
        </div> */}
      </div>
    );
  };
  
  export default ItemListContainer;
