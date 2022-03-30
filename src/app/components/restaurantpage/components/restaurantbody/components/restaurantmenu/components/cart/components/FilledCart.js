import React from "react";
import { useContext ,useState,useReducer} from "react";
import CartContext from "../../../context.js/CartContext";
import CartItem from "./CartItem";
function FilledCart(props) {
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject,getTotal} = cartContext;
    
    return (

        <div>


            <div id="cartTitle">Cart</div>
            <div id="filler1">
                {cartObject.cart.map((item)=>(<CartItem key={item.itemId} item={item} quantity={cartObject.itemCount.get(item.itemId)}/>))}
                    </div>
            <div id="cartTotalDiv">
                <div id="cartTotalTitle">Subtotal</div>
                <div id="cartTotal">{getTotal()}</div>
            </div>
        </div>


    );
}
export default FilledCart;