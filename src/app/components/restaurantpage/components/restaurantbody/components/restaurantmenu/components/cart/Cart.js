import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../../context.js/CartContext";
import image from "./constants/Cart_empty_image.png"
import EmptyCart from "./components/EmptyCart";
import FilledCart from "./components/FilledCart"
function Cart () 
{  let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
    
     return (
        <div className="filler">
        { cartObject.cart.length ? <FilledCart />:<EmptyCart />}
        </div>
     );
}
export default Cart;