import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="NavbarFirst">
        <div className="globeSearch">
          <Link to="/">
            <img
              className="userLogo"
              src="https://previews.123rf.com/images/magurok/magurok1309/magurok130900108/22359466-vector-globe-search-icon.jpg"
              alt="Serach Logo"
            />
          </Link>

          <li className="dropdown">
            <a>English($)</a>
            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>Currency</li>
                <li>USD</li>
                <li>Language</li>
                <li>English</li>
              </div>
            </ul>
          </li>
        </div>

        <img
          className="userLogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt="User Logo"
        />
        <Link to="/login">
          <div>Sign In / Sign In</div>
        </Link>
      </div>

      <div className="Navbars">
        <div className="Navbar1">
          <div className="MainLogo">
            <Link to="/">
              <img
                className="MainLogo1"
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt="logomain"
              />
            </Link>
            <img
              className="MainLogo1"
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt="logomain"
            />
          </div>
        </div>
        <div className="SerachNavbar">
          <div
            style={{
              display: "flex",
              border: "1px solid black",
            }}
          >
            <input
              className="Input"
              placeholder="Search Anthropologie"
              type={"text"}
            />
            <img
              style={{ width: "30px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              alt=""
            />
          </div>
          <Link to="/cart">
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8yKOzPgHpmIsQN3vp5u5XrPjigxM0Wk_QLMUnveo&s"
              alt=""
            />
          </Link>
        </div>
      </div>
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
          <Link to={'/clothes/dresses'}>
            <li>Dresses</li>
          </Link>
          <Link to={'/clothes'}>
            <li>Clothing</li>
          </Link>
          <Link to={'/shoes'}>
          <li>Shoes</li>
          </Link>
          <li>Accessories</li>
          <li>BHLND Weddings</li>
          <li>Home & Furniture</li>
          <li>Beauty & wellness</li>
          <li>Garden & outdoor</li>
          <li>Sale</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
