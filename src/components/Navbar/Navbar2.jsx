import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar2 = () => {
  return (
    <header class="header">
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <p className="Gifts">Gifts</p>
        </li>
        <li>
          <p>New!</p>
        </li>
        <li>
          <Link to={"/clothes/dresses"}>
          <p>
            Dresses
            </p>
          </Link>
        </li>
        <li>
          <Link to={"/clothes"}><p>
            Clothing
            </p>
            </Link>
        </li>
        <li>
          <Link to={"/shoes"}><p>
            Shoes
            </p>
            </Link>
            
        </li>
        <li>
          <p>Accessories!</p>
        </li>
        <li>
          <p>BHLDN Weddings</p>
        </li>

        <li>
          <p>Beauty & Wellness</p>
        </li>
        <li>
          <p>Garden & outdoor</p>
        </li>
        <li>
          <p>Sale</p>
        </li>
      </ul>
    </header>
  );
};

export default Navbar2;
