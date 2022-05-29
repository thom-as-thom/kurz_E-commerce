import React from 'react';
import NavBar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './style.css';
import CartContext from './context/CartContext.jsx';
import Cart from './components/cart/cart.jsx';
import ContextProvider from './context/CartContext.jsx';

export default function App() {

 
  return (
    <ContextProvider>
    <BrowserRouter>
        < NavBar />
        
        <Routes>
          <Route path='/' element= {
            <ItemListContainer/>
          }/>
          <Route path='/catalogo' element={
            <ItemListContainer />
          }/>
          <Route path= '/item/:id' element={<ItemDetailContainer />} />
          <Route path= '/category/:cat' element={<ItemListContainer/>}/>
          <Route path= '/cart' element={<Cart/>}/>
       </Routes>

    </BrowserRouter>
    </ContextProvider>
  );
}
