import React from "react";
import { useContext ,useState,useReducer} from "react";
import CartContext from "../../../context.js/CartContext";
import CartItem from "./CartItem";
function FilledCart(props) {
    let cartContext = useContext(CartContext);
    let {cart,setCart,itemCount,setItemCount,total,setTotal,handleChange} = cartContext;
    return (

        <div>


            <div id="cartTitle">Cart</div>
            <div id="filler1">
                {cart.map((item)=>(<CartItem key={item.itemId} item={item} quantity={itemCount.get(item.itemId)}/>))}
                    </div>
            <div id="cartTotalDiv">
                <div id="cartTotalTitle">Subtotal</div>
                <div id="cartTotal">$120</div>
            </div>
        </div>


    );
}
export default FilledCart;