import React from 'react';
import NavBar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './style.css';

export default function App() {

 
  return (
    <>
    <BrowserRouter>
        < NavBar />
        <Routes>
          <Route path='/' element= {
            <ItemListContainer/>
          }/>
          <Route path='/catalogo' element={
            <ItemListContainer greeting={"Hola soy un greeting"}/>
          }/>
          <Route path= '/detail/:detailId' element={<ItemDetailContainer />} />
       </Routes>

    </BrowserRouter>
    </>
  );
}
