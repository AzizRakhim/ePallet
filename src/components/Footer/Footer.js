import React from "react";
import "../../App.css";
import "./Footer.css";
import logo from "../../assets/images/epallet-logo-blue.svg";

function Footer() {
  return (
    <section className="fotter-section">
      <footer className="footer">
        <div className="container">
          <div className="main-footer-div">
            <div className="logo-footer">
              <a href="/">
                <img className="logo" src={logo} alt="logo" />
              </a>
              <p className="footer-text">
                C ePallet 2017. All right reserved.
              </p>
            </div>
            <ul className="footer-ul">
              <li className="footer-list">
                <h4 className="footer-h4">FOR CUSTOMERS</h4>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Returns
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Paymetn Accounts
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Policies
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Personal assistance
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Shipping tracking
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <h4 className="footer-h4">FOR VENDORS</h4>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Shipment Requirements
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Balance Recharge
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  How to Advertise
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <h4 className="footer-h4">COMPANY</h4>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  About
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                 Jobs
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                 Press Kit
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                 Contact
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                 Privacy & Terms
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <h4 className="footer-h4">HELP CENTER</h4>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Shipping Rates & Policies
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Returns & Replacements
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Manage Your Accout
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  ePallet Assistant
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;