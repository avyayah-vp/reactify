import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" >
          <img src= "/images/logo.png" alt="" width="20%" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
              </li><li className="nav-item">
                <NavLink className="nav-link" to="/about">
                 About
                </NavLink>
              </li><li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              
            </ul>
           <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa-solid fa-arrow-right-to-bracket me-1"></i> Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa-solid fa-user-plus ms-1"></i> Sign Up</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2" >
                <i className="fa-solid fa-cart-shopping me-1"></i> Cart (0)</NavLink>
           </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
