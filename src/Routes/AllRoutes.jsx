import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Home from '../Pages/Homepage/Home'
import Login from '../Pages/Loginpage/Login'
import SignUp from '../Pages/Signpage/SignUppage'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/cart' element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </div>
    )
}
