import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element='' />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}
