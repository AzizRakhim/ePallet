import React from "react";
import "../../../App.css";
import "./Hero.css";

function Pallet() {
  return (
    <div className="pallet">
      <ul className="pallet__list d-flex flex-wrap">
        <li className="pallet__item col-6">
          <div className="pallet__wrapper">
            <div className="pallet__header">
              <span className="pallet__num">
                1 Pallet
              </span>
              <span className="pallet__price-d">
                Delivered Price
              </span>
            </div>
            <div className="pallet__main">
              <span className="pallet__price">
                $5.65/Cs
              </span>
              <span className="pallet__price">
                $565.13/Plt
              </span>
              <span className="pallet__oz">
                $0.02/oz
              </span>
            </div>
          </div>
        </li>
        <li className="pallet__item col-6">
          <div className="pallet__wrapper">
            <div className="pallet__header">
              <span className="pallet__num">
                3 Pallets
              </span>
              <span className="pallet__price-d">
                Delivered Price
              </span>
            </div>
            <div className="pallet__main">
              <span className="pallet__price">
                $5.23/Cs
              </span>
              <span className="pallet__price">
                $523.35/Plt
              </span>
              <span className="pallet__oz">
                $0.02/oz
              </span>
              <span className="pallet__save">
                (Save Up To 12%)
              </span>
            </div>
          </div>
        </li>
        <li className="pallet__item col-6">
          <div className="pallet__wrapper">
            <div className="pallet__header">
              <span className="pallet__num">
                5 Pallets
              </span>
              <span className="pallet__price-d">
                Delivered Price
              </span>
            </div>
            <div className="pallet__main">
              <span className="pallet__price">
                $4.97/Cs
              </span>
              <span className="pallet__price">
                $497.67/Plt
              </span>
              <span className="pallet__oz">
                $0.02/oz
              </span>
              <span className="pallet__save">
                (Save Up To 16%)
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Pallet;