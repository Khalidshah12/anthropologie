import React from "react";
import { Route, Routes } from "react-router-dom";
import Dresses from '../Pages/ItemPages/Clothes/Dresses/Dresses';
import Casual from "../Pages/ItemPages/Clothes/Dresses/DressItem/Casual";
import FormalDress from "../Pages/ItemPages/Clothes/Dresses/DressItem/FormalDress";
import Party from "../Pages/ItemPages/Clothes/Dresses/DressItem/Party";
import Wedding from "../Pages/ItemPages/Clothes/Dresses/DressItem/Wedding";
import Home from "../Pages/Homepage/Home";
import Clothes from "../Pages/ItemPages/Clothes/Clothes";
import Jeans from "../Pages/ItemPages/Clothes/Jeans/Jeans";

import Bootcut from "../Pages/ItemPages/Clothes/Jeans/JeansItem/Bootcut";
import Boyfriend from "../Pages/ItemPages/Clothes/Jeans/JeansItem/Boyfriend";
import Flare from "../Pages/ItemPages/Clothes/Jeans/JeansItem/Flare";
import Skinny from "../Pages/ItemPages/Clothes/Jeans/JeansItem/Skinny";
import Straight from "../Pages/ItemPages/Clothes/Jeans/JeansItem/Straight";
import WideLeg from "../Pages/ItemPages/Clothes/Panits/PanitItem/WideLeg";
import Paint from "../Pages/ItemPages/Clothes/Panits/Paint";
import WorkPaint from "../Pages/ItemPages/Clothes/Panits/PanitItem/WorkPaint";
import Shoes from "../Pages/ItemPages/Shoes/Shoes";
import Birkenstock from "../Pages/ItemPages/Shoes/ShoesItem/Birkenstock";
import Embleshed from "../Pages/ItemPages/Shoes/ShoesItem/Embleshed";
import Sneaker from "../Pages/ItemPages/Shoes/ShoesItem/Sneaker";
import WideLegs from "../Pages/ItemPages/Clothes/Jeans/JeansItem/WideLegs";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import SingleItemPage from "../components/singleitemPage/SingleItemPage";
import NotFound from '../components/NotFound';
import Delivery from "../Pages/Delivery/Delivery";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";

const Allroutes = () => {
  return (
    <>
     
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        
        {/* Cart And Payment */}
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/checkout/shipping-address' element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path='/checkout/shipping-delivery' element={<PrivateRoute><Delivery /></PrivateRoute>} />
        <Route path='/checkout/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />

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

        {/* pagination */}
      
      </Routes>
    </>
  );
};

export default Allroutes;
