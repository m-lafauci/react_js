import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <div className='container-fluid p-4 mt-5 mb-5'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

