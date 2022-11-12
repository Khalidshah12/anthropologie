import React from "react";
import "./Navbar.css";
const Navbar2 = () => {
  return (
    <header class="header">
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <a>Gifts</a>
        </li>
        <li>
          <a>New!</a>
        </li>
        <li>
          <a>Dresses</a>
        </li>
        <li>
          <a>Clothing</a>
        </li>
        <li>
          <a>Shoes</a>
        </li>
        <li>
          <a>Accessories!</a>
        </li>
        <li>
          <a>BHLDN Weddings</a>
        </li>

        <li>
          <a>Beauty & Wellness</a>
        </li>
        <li>
          <a>Garden & outdoor</a>
        </li>
        <li>
          <a>Sale</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar2;
