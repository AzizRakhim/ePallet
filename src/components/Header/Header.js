import React from "react";
import "../../App.css";
import "./Header.css";
import logo from "../../assets/images/epallet-logo-blue.svg";

function Header() {
  return (
    <header className="site-header header">
      <div className="container d-flex align-items-center">
        <div className="header__logo-box">
          <a href="/" className="header__logo-link">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <form className="header__form">
          <div className="header__search-wrapper d-flex align-items-center">
            <i class='bx bx-search'></i>
            <input type="text" className="header__input" name="search" placeholder="Type to search" required />
            <select name="category" id="category">
              <option value="all">All Categories</option>
              <option value="food service">Food Service</option>
              <option value="health & beauty">Health & Beauty</option>
              <option value="industrial ingredients">Industrial Ingredients</option>
              <option value="beverages">Beverages</option>
              <option value="pet supplies">Pet S  upplies</option>
              <option value="frozen">Frozen</option>
              <option value="cleaning products">Cleaning Products</option>
            </select>
          </div>
        </form>
        <ul className="header__list d-flex align-items-center">
          <li className="header__item">
            <a href="/" className="header__link">
              <i class='bx bx-package'></i>
              Orders
            </a>
          </li>
          <li className="header__item">
            <a href="/" className="header__link">
              <i class='bx bx-basket'></i>
              Cart
            </a>
          </li>
          <li className="header__item">
            <a href="/" className="header__link">
              <i class='bx bx-user'></i>
              Profile
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;