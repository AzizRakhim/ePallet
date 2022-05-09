import React from "react";
import "../../App.css";
import "./Header.css";

function Navigation() {
  return (
    <div className="container">
      <ul className="navigation__list d-flex align-items-center">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            food service
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Health & Beauty
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Industrial Ingredients
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Beverages
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Pet Supplies
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link navigation__link--active">
            Frozen
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            cleaning products
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;