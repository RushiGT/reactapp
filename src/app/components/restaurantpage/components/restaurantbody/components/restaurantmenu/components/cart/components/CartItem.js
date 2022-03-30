import React, { useEffect, useState } from "react";
import { useReducer ,useContext} from "react";
import CartContext from "../../../context.js/CartContext";

function CartItem(props) {
    
    let { item ,quantity} = props;
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
     
    return (
        <div className="cartitem" id={item.itemId+"cart"}>
            <div className="cartItemType">{item.itemType}</div>
            <div className="cartItemName">{item.itemName}</div>
            <div className="quantityDivcart">
                <button onClick={() => setCartObject({ type: "decrement", item: item })} className="minus">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={() => setCartObject({ type: "increment", item: item })} className="plus">+</button>
            </div>
            <div className="cartItemPrice">{item.itemPrice*quantity}</div>
        </div>
    );
};

export default CartItem;