import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../../context.js/CartContext";
import image from "./constants/Cart_empty_image.png"
import EmptyCart from "./components/EmptyCart";
import FilledCart from "./components/FilledCart"
function Cart () 
{   let cartContext = useContext(CartContext);
    // let {cart,setCart,itemCount,setItemCount,total,setTotal,handleChange} = cartContext;
    let [cartState,setCartState] = useState(true);
    // useEffect(()=>
    // {
    //     if(cart.length===0)
    //     {
    //         setCartState(true);
    //     }
    //     else 
    //     {
    //         setCartState(true);
    //     }
    // },[cart]);
     return (
        <div className="filler">
        {cartState && <EmptyCart /> }
        {!cartState && <FilledCart/>}
        </div>
     );
}
export default Cart;