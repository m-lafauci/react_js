import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';

function App() {
  
  return (
    <div className='container-fluid p-4 mt-5 mb-5'>
      <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

