import React from "react";
import "../../App.css";
import "./Header.css";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header__box d-flex align-items-center justify-content-between">
          <div className="top-header__left d-flex align-items-center">
            <select name="lang" id="lang">
              <option value="en">En</option>
              <option value="ru">Rus</option>
              <option value="uz">Uzb</option>
            </select>
            <div className="top-header__location-box d-flex align-items-center">
              <i class='bx bx-map'></i>
              <select name="location" id="location">
                <option value="austin">Austin, TX</option>
                <option value="tashkent">Tashkent, UZ</option>
                <option value="moscow">Moscow, RU</option>
              </select>
            </div>
          </div>
          <div className="top-header__right">
            <div className="top-header__link-box">
              <a href="tel: +1 (800) 532 6220" className="top-header__link-phone">
                +1 (800) 532 6220
              </a>
              <a href="/" className="top-header__link">
                Help center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader;