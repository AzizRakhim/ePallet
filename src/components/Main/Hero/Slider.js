import React from "react";
import "../../../App.css";
import "./Hero.css";
import juiceOne from "../../../assets/images/juice.jpg";
import juiceTwo from "../../../assets/images/juice-two.jpg";
import juiceThree from "../../../assets/images/juice-three.jpg";
import juiceFour from "../../../assets/images/juice-four.jpg";
import juiceFive from "../../../assets/images/juice-five.jpg";

function Slider() {
  return (
    <div className="slider">
      <ul className="slider__list d-flex">
        <li className="slider__item">
          <img src={juiceOne} alt="juice" />
        </li>
        <li className="slider__item">
          <img src={juiceTwo} alt="juice" />
        </li>
        <li className="slider__item">
          <img src={juiceThree} alt="juice" />
        </li>
        <li className="slider__item">
          <img src={juiceFour} alt="juice" />
        </li>
        <li className="slider__item">
          <img src={juiceFive} alt="juice" />
        </li>
      </ul>
      <ul className="slider__small-list d-flex align-items-center">
        <li className="slider__small-item">
          <button className="slider__btn active">
            <img src={juiceOne} alt="juice" />
          </button>
        </li>
        <li className="slider__small-item">
          <button className="slider__btn">
            <img src={juiceTwo} alt="juice" />
          </button>
        </li>
        <li className="slider__small-item">
          <button className="slider__btn">
            <img src={juiceThree} alt="juice" />
          </button>
        </li>
        <li className="slider__small-item">
          <button className="slider__btn">
            <img src={juiceFour} alt="juice" />
          </button>
        </li>
        <li className="slider__small-item">
          <button className="slider__btn">
            <img src={juiceFive} alt="juice" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Slider;

window.addEventListener("load", () => {
  let elSliderBtns = document.querySelectorAll(".slider__btn");
  elSliderBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log("ok");
      let elSliderList = document.querySelector(".slider__list");
      elSliderList.style.transform = `translateX(${-index * 400}px)`;
    });
  });
})