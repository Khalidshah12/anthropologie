import React from "react";
import "./Navbar.css";
const Navbar2 = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="dropdown">
            Gift
            <ul className="child-dropdown">
              <a>Shop By Category</a>
              <div className="hovergrid">
                <div className="hovergrid1">
                  <li>Explore All Gifts</li>
                  <li>Shop All Gifts</li>
                  <li>Gifts for Her</li>
                  <li>Candle gift & sets</li>
                  <li>Holiday ,decor </li>
                  <li>Stocking suffers</li>
                  <li>Giftable Sweaters</li>
                  <li>Giftable Accessories</li>
                  <li>Gifts for the home</li>
                  <li>Cozy Gifts ,slippers,Throws</li>
                  <li>Cold weather Gifts </li>
                  <li>Beauty gifts and sets</li>
                  <li>Gifts by Receipts</li>
                  <li>BestSeling Gifts</li>
                  <li>Gifts Bundles</li>
                  <li>Gifts Cards</li>
                </div>

                <div className="hovergrid2">
                  <h3>Gifts under price</h3>
                  <div>
                    <li>Gifts under 30$</li>
                    <li>Gifts under 50$ </li>
                    <li>Gifts under 25$</li>
                    <li> Gifts under 100$</li>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li>New!</li>
          <li>Dresses</li>
          <li>Clothing</li>
          <li>Shoes</li>
          <li>Accessories</li>
          <li>BHLND Weddings</li>
          <li>Home & Furniture</li>
          <li>Beauty & wellness</li>
          <li>Garden & outdoor</li>
          <li>Sale</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
