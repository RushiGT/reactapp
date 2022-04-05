import React, { useEffect, useState } from "react";
import { useReducer ,useContext} from "react";
import CartContext from "../../../context.js/CartContext";
import Actions from "../../../../../../../constants/Action";
function CartItem(props) {
    
    let { item ,quantity} = props;
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
     
    return (
        <div className="cartitem" id={item.itemId+"cart"}>
            {(item.itemType==="Veg")?<div className="cartItemType Veg">{item.itemType}</div> : <div className="cartItemType NonVeg">{item.itemType}</div> }
            <div className="cartItemName">{item.itemName}</div>
            <div className="quantityDivcart">
                <button onClick={() => setCartObject({ type: Actions.reduce, item: item })} className="minus">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={() => setCartObject({ type: Actions.add, item: item })} className="plus">+</button>
            </div>
            <div className="cartItemPrice">{item.itemPrice*quantity}</div>
        </div>
    );
};

export default CartItem;