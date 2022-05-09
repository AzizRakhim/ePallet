import React from "react";
import "../../App.css";
import "./Header.css";

function Breadcrumb() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/" className="breadcrumb-link">Frozen</a></li>
          <li class="breadcrumb-item"><a href="/" className="breadcrumb-link">Juice</a></li>
          <li class="breadcrumb-item active" aria-current="page">Motts's Unsweetened Applesauce</li>
        </ol>
      </nav>
      <div className="breadcrumb-back">
        <a href="/" className="breadcrumb-back-link d-flex align-items-center">
          <i class='bx bx-arrow-from-right'></i>
          Back
        </a>
      </div>
    </div>
  )
}

export default Breadcrumb;