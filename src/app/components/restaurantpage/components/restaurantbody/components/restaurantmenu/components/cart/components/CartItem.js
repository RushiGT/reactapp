import React, { useEffect, useState } from "react";
import { useReducer ,useContext} from "react";


function CartItem(props) {
    
    let { item ,quantity} = props;
   
     
    return (
        <div className="cartitem" id={item.itemId+"cart"}>
            <div className="cartItemType"></div>
            <div className="cartItemName">{item.itemName}</div>
            <div className="quantityDivcart">
                <button className="minus">-</button>
                <span className="quantity">{quantity}</span>
                <button className="plus">+</button>
            </div>
            <div className="cartItemPrice">{item.itemPrice*quantity}</div>
        </div>
    );
};

export default CartItem;