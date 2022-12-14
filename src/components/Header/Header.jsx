import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from '../Button/CartBtn';

const Header = () => {
  return (
    <>
      <nav style={{background:"rgba(255, 255, 255, 0.664)"}} className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid py-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img style={{ width: '150px', }} src="https://www.masterbrand.me/wp-content/uploads/2019/04/masterbrand-logowing_fullcolor-rgb.png" alt="" />
          {/* <NavLink className="navbar-brand mx-auto fw-bold" to="/">Brand Master :)</NavLink> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;