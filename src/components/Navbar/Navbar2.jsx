import React from "react";

const Navbar2 = () => {
  return (
    <ul className="nav-links">
      <li className="sale">Gifts</li>
      <li className="dropdown">
        <a>New!</a>
        <ul className="child-dropdown">
          <div className="imagediv">
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/iems-under-1000_200x.png?v=1649917945" />
              <p>IN- EARS FOR BEGINERS</p>
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-under-15000_200x.png?v=1649922390" />
              <p>HEADPHONES FOR BEGINERS</p>
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/tws-anc-1_200x.png?v=1651320486" />
              <p>TRUE WIRELESS FOR BUDS</p>
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/flagship-headphones-closed-back-1_200x.png?v=1651833407" />
              <p>WIRELESS HEADPHONES</p>
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH5s-01_c0e6da60-45a5-4218-8a59-6e5f66fa3486_500x.jpg?v=1631871302" />
              <p>FLAGSHIP IEMS</p>
            </li>
            <li>
              <img src="https://m.media-amazon.com/images/I/61I3R2ioAlL._SX522_.jpg" />
              <p>FLAGSHIP HEADPHONES</p>
            </li>

            <li>
              <img src="https://m.media-amazon.com/images/I/6118YQPQZlL._AC_UY327_FMwebp_QL65_.jpg" />
              <p>CASES</p>
            </li>
          </div>
        </ul>
      </li>
      <li className="dropdown">
        dresses
        <ul className="child-dropdown">
          <div className="Brands">
            <li>1Custom</li>

            <li>Abyss</li>
            <li>Thieaudio</li>
            <li>64 Audio</li>
            <li>BLON</li>
            <li>EarMen</li>
            <li>HiBy </li>
            <li>Lotoo</li>
            <li>EPos</li>
            <li>iBASSo</li>
          </div>
        </ul>
      </li>
      <li className="dropdown">
        <a>Clothing</a>
        <ul className="child-dropdown2">
          <div className="lidivs">
            <li>Best HeadPhones Under Rs. 1000</li>
            <li>Best HeadPhones Under Rs. 2000</li>
            <li>Best HeadPhones Under Rs. 3000</li>
            <li>Best HeadPhones Under Rs. 4000</li>
            <li>Best HeadPhones Under Rs. 5000</li>
            <li>Best HeadPhones Under Rs. 10000</li>
            <li>Best HeadPhones Under Rs. 20000</li>
            <li>Best HeadPhones Under Rs. 30000</li>
          </div>
        </ul>
      </li>
      <li className="dropdown">
        <a>Shoes</a>
        <ul className="child-dropdown2">
          <div className="lidivs">
            <li>Unboxed</li>
            <li>Pre-Owned</li>
            <li>Demo Unit</li>
            <li>Deals of the Month</li>
            <li>Clearance</li>
          </div>
        </ul>
      </li>
      <li>Accessories </li>

      <li>BHLDN Weddings</li>

      <li>Home & Furniture</li>
      <li>Beauty & Wellnwss</li>
      <li>Garden & Outdoor</li>
      <li>Sale</li>
    </ul>
  );
};

export default Navbar2;
