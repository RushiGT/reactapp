import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../../context.js/CartContext";
import image from "./constants/Cart_empty_image.png"
import EmptyCart from "./components/EmptyCart";
import FilledCart from "./components/FilledCart"
import { connect } from "react-redux";
function Cart (props) 
{  let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
    let {cart,itemCount} = props;
     return (
        <div className="filler">
        { cart.length ? <FilledCart />:<EmptyCart />}
        </div>
     );
}
const mapStateToProps = state => {
   return {
       cart : state.cart.cart,
       itemCount : state.cart.itemCount
   }
}

export default connect(mapStateToProps)(Cart);