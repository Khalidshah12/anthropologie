import { Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiFillCaretDown } from "react-icons/ai";
import Navbar2 from "./Navbar2";
import Layout from "../Layout";

const Navbar = () => {
  return (
    <header>
      <img
        src="https://images.ctfassets.net/5de70he6op10/73vpJWzKmWO1fT2HwJ3p4B/b42cab1aedaef564d46e96fbd1cccaa0/Nov22_30Off_SOS_PrimaryBanner_LS_ThisWeekendOnly.jpg"
        alt=""
      />
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
            <div style={{ display: "flex", gap: "5px" }}>
              <a>English($)</a>
              <AiFillCaretDown />
            </div>

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
          <div>Sign In / Sign Up</div>
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
              className="MainLogo2"
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt="logomain"
            />
          </div>
        </div>
        <div className="SerachNavbar">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              // border: "1px solid black",
            }}
          >
            <Input
              htmlSize={20}
              width="auto"
              justifyContent="center"
              alignItems="center"
              placeholder="Search Anthropologie"
            />
            <BsSearch size="1.5em" />
          </div>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/cart"
          >
            <AiOutlineShoppingCart size="1.5em" />
          </Link>
        </div>
      </div>
      <Navbar2 />
    </header>
  );
};

export default Navbar;
