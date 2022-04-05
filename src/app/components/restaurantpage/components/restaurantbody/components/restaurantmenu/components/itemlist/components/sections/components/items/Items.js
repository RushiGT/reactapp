import React, { useEffect, useState } from "react";
import { useReducer, useContext } from "react";
import Button from "../../../../../button";
import CartContext from "../../../../../../context.js/CartContext";
let initialButtonState = 1;



function Items(props) {

    let { item, onlyVeg } = props;
    if(onlyVeg && item.itemType !== "Veg")
    {return(null);}

   return (
        <div className="itemFull" id={item.itemId}>
            <div id={item.itemId + "menu"}>
                {(item.itemType === "Veg") ? <div className="itemType Veg">{item.itemType}</div> : <div className="itemType NonVeg">{item.itemType}</div>}
                <div className="itemvalue">{item.itemName}</div>
                <div className="itemprice">{item.itemPrice}</div>
                <div className="iteminfo">{item.itemInfo}</div>
            </div>
            <div className="imageAndButtonDiv" id={item.itemId + "image"}>
                <img className="itemimage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0" />
                <Button item={item} />
            </div>
        </div>
    );
};

export default Items;