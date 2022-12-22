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
import WideLegs from "./ItemPages/Clothes/Jeans/JeansItem/WideLegs";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import SingleItemPage from "../components/singleitemPage/SingleItemPage";
import NotFound from '../components/NotFound';
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
const Allroutes = () => {
  return (
    <>
     
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        
        {/* Cart And Payment */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout/shipping-address' element={<Checkout />} />
        <Route path='/checkout/shipping-delivery' element={<Delivery />} />
        <Route path='/checkout/payment' element={<Payment />} />

        {/* clothes routing */}
        <Route path="/clothes" element={<Clothes />}></Route>
        {/* dress routing */}
        <Route path="/clothes/dresses" element={<Dresses />} />
        <Route path="/clothes/dresses/wedding" element={<Wedding />}></Route>
        <Route path="/clothes/dresses/casual" element={<Casual />}></Route>
        <Route path="/clothes/dresses/party" element={<Party />}></Route>
        <Route path="/clothes/dresses/formaldress" element={<FormalDress />}></Route>

        {/* jeans routing */}
        <Route path="/clothes/jeans" element={<Jeans />}></Route>
        <Route path="/clothes/jeans/bootcut" element={<Bootcut />}></Route>
        <Route path="/clothes/jeans/boyfriend" element={<Boyfriend />}></Route>
        <Route path="/clothes/jeans/flare" element={<Flare />}></Route>
        <Route path="/clothes/jeans/skinny" element={<Skinny />}></Route>
        <Route path="/clothes/jeans/straight" element={<Straight />}></Route>
        <Route path="/clothes/jeans/wideleg" element={<WideLegs />}></Route>

        {/* paints routing */}
        <Route path="/clothes/paints" element={<Paint />}></Route>
        <Route path="/clothes/paints/workpaints" element={<WorkPaint />}></Route>
        <Route path="/clothes/paints/wideleg" element={<WideLeg />}></Route>
        {/* shoes routing */}
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/shoes/birkenstock" element={<Birkenstock />}></Route>
        <Route path="/shoes/embleshed" element={<Embleshed />}></Route>
        <Route path="/shoes/sneakers" element={<Sneaker />}></Route>
        {/* single page item */}
        <Route path="/shop/:id" element={<SingleItemPage />} ></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Allroutes;
