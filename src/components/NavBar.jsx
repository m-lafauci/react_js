import React from "react";
import logo from "./assets/style.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
    <div>
      <nav className="navbar fixed-top navbar-expand-lg mb-4 d-flex align-items-center">
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
        <CartWidget />
      </nav> 
    </div>
  )
}

export default NavBar;