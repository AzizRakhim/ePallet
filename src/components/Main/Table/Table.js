import React from "react";
import "../../../App.css";
import "./Table.css";

function Table() {
  return (
    <div className="container">
      <div className="table">
        <ul className="table__list">
          <li className="table__item">
            <a className="table__link" href="/">
              Overview
            </a>
          </li>
          <li className="table__item tableActive">
            <a className="table__link" href="/">
              Nutritionals
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="/">
              Palette/Case Configuration
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="/">
              Shopping/Storage
            </a>
          </li>
          <li className="table__item">
            <a className="table__link" href="/">
              Dosc & Certs
            </a>
          </li>
        </ul>
        <div className="table__box">
          <div className="table__box-inner">
            <div className="table__list2 d-flex align-items-center">
              <p className="table__title2">Serving Size:</p>
              <span>30g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Serving Per Container:</p>
              <span>3.3</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs">Amount Per Serving</p>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Calories</p>
              <span>140</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Calories from Fat</p>
              <span>60</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2"></p>
              <span></span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">% Daily Value</span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Total Fat</p>
              <span>6g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">10%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Saturated Fat</p>
              <span>3.5g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">17%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Trans Fat</p>
              <span>3.5g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs"></span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Cholesterol</p>
              <span>5mg</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">1%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs">Sodium</p>
              <span>65g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">3%</span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Total Carbohyrate</p>
              <span>21g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">7%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Dietary Fiber</p>
              <span>1g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs">4%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Sugars</p>
              <span>14g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span className="abs"></span>
            </div>
          </div>
          <div className="table__box-inner">
            <div className="table__list2">
              <p className="table__title2 abs">Protein</p>
              <span>1g</span>
            </div>
            <div className="table__list2">
              <p className="table__title2"></p>
              <span></span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Vitamin A</p>
              <span>0%</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Vitamin C</p>
              <span>2%</span>
            </div>
          </div>
          <div className="table__box-inner2">
            <div className="table__list2">
              <p className="table__title2 abs ps-4 thin">Calcium</p>
              <span>0%</span>
            </div>
            <div className="table__list2">
              <p className="table__title2">Iron</p>
              <span>0%</span>
            </div>
          </div>
        </div>
        <div className="table__value mb-4">
          <span className="table__val2">
            *Percent Daily Values are base on a 2.000 calorie diet.
          </span>
        </div>
        <p className="table__text2">
          <span className="tabel__text3">Ingredients:</span> Brown Sugar, Popconr, Caramel Corn Mix(corn syrup solids, brown sugar, molasses, soy lecithin and cream of tartar), Milk Chocolate,Coanla Oil,Butter, COncut Oil, Salt, Table.
        </p>
      </div>
    </div>
  )
}

export default Table;