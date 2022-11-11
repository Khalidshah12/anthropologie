import React from "react";
import { Route, Routes } from "react-router-dom";
import Dresses from './ItemPages/Clothes/Dresses/Dresses';
import Casual from "./ItemPages/Clothes/Dresses/DressItem/Casual";
import FormalDress from "./ItemPages/Clothes/Dresses/DressItem/FormalDress";
import Party from "./ItemPages/Clothes/Dresses/DressItem/Party";
import Wedding from "./ItemPages/Clothes/Dresses/DressItem/Wedding";
import Home from "./Homepage/Home";
import Clothes from "./ItemPages/Clothes/Clothes";
import Jeans from "./ItemPages/Clothes/Jeans/Jeans";
import Login from "./Loginpage/Login";
import Bootcut from "./ItemPages/Clothes/Jeans/JeansItem/Bootcut";
import Boyfriend from "./ItemPages/Clothes/Jeans/JeansItem/Boyfriend";
import Flare from "./ItemPages/Clothes/Jeans/JeansItem/Flare";
import Skinny from "./ItemPages/Clothes/Jeans/JeansItem/Skinny";
import Straight from "./ItemPages/Clothes/Jeans/JeansItem/Straight";
import WideLeg from "./ItemPages/Clothes/Panits/PanitItem/WideLeg";
import Paint from "./ItemPages/Clothes/Panits/Paint";
import WorkPaint from "./ItemPages/Clothes/Panits/PanitItem/WorkPaint";
import Shoes from "./ItemPages/Shoes/Shoes";
import Birkenstock from "./ItemPages/Shoes/ShoesItem/Birkenstock";
import Embleshed from "./ItemPages/Shoes/ShoesItem/Embleshed";
import Sneaker from "./ItemPages/Shoes/ShoesItem/Sneaker";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout/shipping-address' element={<Checkout />} />

        {/* clothes routing */}
        <Route path="/clothes" element={<Clothes />}></Route>
        {/* dress routing */}
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/wedding" element={<Wedding />}></Route>
        <Route path="/casual" element={<Casual />}></Route>
        <Route path="/party" element={<Party />}></Route>
        <Route path="/formaldress" element={<FormalDress />}></Route>

        {/* jeans routing */}
        <Route path="/jeans" element={<Jeans />}></Route>
        <Route path="/bootcut" element={<Bootcut />}></Route>
        <Route path="/boyfriend" element={<Boyfriend />}></Route>
        <Route path="/flare" element={<Flare />}></Route>
        <Route path="/skinny" element={<Skinny />}></Route>
        <Route path="/straight" element={<Straight />}></Route>
        <Route path="/wideleg" element={<WideLeg />}></Route>
        {/* paints routing */}
        <Route path="/paints" element={<Paint />}></Route>
        <Route path="/workpaints" element={<WorkPaint />}></Route>
        {/* shoes routing */}
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/birkenstock" element={<Birkenstock />}></Route>
        <Route path="/embleshed" element={<Embleshed />}></Route>
        <Route path="/sneaker" element={<Sneaker />}></Route>
      </Routes>
    </>
  );
};

export default Allroutes;
