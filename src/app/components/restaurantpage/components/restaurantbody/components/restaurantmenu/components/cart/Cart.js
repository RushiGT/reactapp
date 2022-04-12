import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../../context.js/CartContext";
import image from "./constants/Cart_empty_image.png"
import EmptyCart from "./components/EmptyCart";
import FilledCart from "./components/FilledCart"
import { connect } from "react-redux";
import { getCartDetails,getItemCountDetails } from "../../../../../../../../../redux/reducers/selectors/getCartDetails";
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
       cart : getCartDetails(state),
       itemCount : getItemCountDetails(state)
   }
}

export default connect(mapStateToProps)(Cart);