import React from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    
    return (
        <div className='card_detail'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombreProducto}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et in! Quod veritatis doloribus.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <ItemCount stock={5} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;