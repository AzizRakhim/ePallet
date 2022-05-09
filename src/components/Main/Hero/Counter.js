import React, {Component} from "react";
import "../../../App.css";
import "./Hero.css";

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cs: 0,
      plt: 0,
      num: 0,
      oz: 0
    }
  }

  render() {

    const addUp = () => {
      this.setState({
        cs: this.state.cs + 6,
        plt: this.state.plt + 146,
        num: this.state.num + 1,
        oz: this.state.oz + 0.042
      });
    }

    const minusDown = () => {
      if(this.state.num > 0){
        this.setState({
          cs: this.state.cs - 6,
          plt: this.state.plt - 146,
          num: this.state.num - 1,
          oz: this.state.oz - 0.042
        });
      }
    }

    return (
      <div className="counter">
        <span className="counter__intro">
          mott's
        </span>
        <h3 className="counter__title">
          Mott's Unsweetened Applesauce
        </h3>
        <div className="counter__size-box d-flex">
          Pack Size:
          <span className="counter__size">
            24/16.90 oz
          </span>
        </div>
        <p className="counter__text">
          Chef Maxwell Applesauce is a delicious classic and part of a healthy diet low in saturated fat with 40% Vitamin C
        </p>
        <button className="counter__download">
          <i class='bx bxs-cloud-download'></i>
          <span className="counter__underline">
            download spec sheet
          </span>
        </button>
        <div className="counter__price-box d-flex align-items-center">
          <div className="counter__price">
            $
            <span className="cs-num">
              {this.state.cs} 
            </span>
            <span className="counter__small-num">
              <sup>80</sup>
              <span className="counter__smth">
                /Cs
              </span>
            </span>
          </div>
          <div className="counter__grey-num">
            (${this.state.oz.toFixed(2)}/oz)
          </div>
          <div className="counter__price">
            $
            <span className="plt-num">
              {this.state.plt}
            </span>
            <span className="counter__small-num">
              <sup>30</sup>
              <span className="counter__smth">
                /Plt
              </span>
            </span>
          </div>
        </div>
        <p className="counter__time-text">
          Approx. Lead Time: 
          <span className="counter__time">
            12 days
          </span>
        </p>
        <p className="counter__info-text">
          Information aobut product was provided by manufacturer
        </p>
        <ul className="counter__inner-list d-flex align-items-center">
          <li className="counter__inner-item col-3 d-flex">
            <span className="counter-num">{this.state.num}</span>
            <div className="counter__btns">
              <button className="btn-top" onClick={addUp}>
                <i class='bx bxs-up-arrow'></i>
              </button>
              <button className="btn-top" onClick={minusDown}>
                <i class='bx bxs-down-arrow'></i>
              </button>
            </div>
          </li>

          <li className="counter__inner-item col-4">
            <button className="counter__cart-btn">
              <i class='bx bx-basket'></i>
              Add to Cart
            </button>
          </li>
          <li className="counter__inner-item col-5 d-flex align-items-center">
            <button className="counter__setting">
              <i class='bx bx-certification'></i>
              Custom Pallet
            </button>
          </li>
        </ul>
        <p className="counter__warning">
          Minimum pallet quantity: 2
        </p>
        <button className="counter__wishlist-btn">
          <i class='bx bx-star'></i>
          Add to Wishlist
        </button>
      </div>
    )
  }
}

export default Counter;



