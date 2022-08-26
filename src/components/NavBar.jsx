import React from "react";
import logo from "../assets/style.png"

const NavBar = () => {
    return(
    <div>
      <nav className="navbar sticky-top navbar-expand-lg mb-4 d-flex align-items-center">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img alt="Style" src={logo} href="#" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
            <a className="nav-link" id="navRemeras" href="#">REMERAS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navMusculosas" href="#">MUSCULOSAS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navCamisas" href="#">CAMISAS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navBuzos" href="#">BUZOS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navCamperas" href="#">CAMPERAS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navSweaters" href="#">SWEATERS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navPantalones" href="#">PANTALONES</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navVestidos" href="#">VESTIDOS</a>
            </li>
          </ul>

        <form id="busquedaNombre" className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar artículos..." aria-label="Search" /> 
          <button className="btn btn-primary my-sm-0" type="submit">Buscar</button>
        </form>
        </div>
      </div>
      <form>
        <button id="btnCarrito" type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalCarrito">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
          </svg>
        </button>
      </form>
    </nav>

    </div>
  )
}

export default NavBar;