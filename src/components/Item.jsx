import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {
  
  const { id, nombreProducto, precio, imagen, stock } = info;
  const src = require(`${imagen}`);

  return (
    <div className="col-12 ml-5 mb-3 col-md-3">
      <div className="card">
      <Link to={`/detalle/${id}`}><img src={src} className="card-img-top" alt={nombreProducto} /></Link>
        <div className="card-body">
          <h4 className="card-title">{nombreProducto}</h4>
          <h5 className="card-text">${precio}</h5>
          <p className="text-center"><em>Stock disponible: <b>{stock}</b> unidades</em></p>
        </div>
      </div>
    </div>
  );
};

export default Item;