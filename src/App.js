import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Contacto from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import Nosotros from './pages/NosotrosPage';
import Noticias from './pages/NoticiasPage';


function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Nav/>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='nosotros' element={<Nosotros/>}/>
              <Route path='noticias' element={<Noticias/>}/>
              <Route path='contacto' element={<Contacto/>}/>
            </Routes>
        </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;

