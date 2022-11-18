import React, { Fragment } from "react";
import "./navbar.css";

export default function Navbar(){

    return(
      <Fragment>
      
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="logotienda.png" height="80" alt="Rápido y Seguro"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/listar-productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/ventas">Ventas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/cliente">Cliente</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/modificar">Modificar Cliente</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/carrito">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/login">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    <div
      class="banner-image w-100 vh-100 d-flex justify-content-left align-items-center"
    >
      <div class="mx-5 content text-left">
        <h3 class="text-white font-title-text">Inicia tu Aventura</h3>
        <p class="text-white font-text-text">Ven con nosotros, inicia tu viaje ahora</p>
      </div>
    </div>

    
   
    

    
    </Fragment>
 
    
   

     
    )

}
