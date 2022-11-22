import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { Carrito } from './components/carrito/carrito';
import { Ventas } from './components/ventas/ventas';
import { Home } from './components/home/home';
import { Login } from './components/Login/login';
import {Modificar} from './components/Modificar/modificar';
import 'bootstrap/dist/css/bootstrap.css';
import {Cliente} from './components/cliente/cliente';
import {Signup} from './components/Signup/index.jsx';



import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from './components/navbar/navbar.js';

const rootElement = document.getElementById("rooti");
const root = createRoot(rootElement);


root.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Navbar />,<Home />]} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/listar-productos" element={<App/>} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/modificar" element={<Modificar/>} />
            <Route path="/ventas" element={<Ventas />} />
         
        </Routes>
    </BrowserRouter>,
    rootElement
    
);
