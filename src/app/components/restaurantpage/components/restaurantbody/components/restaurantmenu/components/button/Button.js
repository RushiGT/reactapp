import React, { useContext ,useEffect, useState} from "react";
import CartContext from "../../context.js/CartContext";
import Actions from "../../../../../../constants/Action";
function Button (props)
{   let {item} = props;
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
   
    
    return(
        
            <div className="buttonDiv">
            {(cartObject.itemCount.has(item.itemId)) ?
                (<div className="quantityDiv">
                    <button onClick={() => setCartObject({ type: Actions.reduce, item: item })} className="minus" id={item.itemId + "minus"}>-</button>
                    <span className="quantity" id={item.itemId + "quantity"}> {cartObject.itemCount.get(item.itemId)}</span>
                    <button onClick={() => {
                        setCartObject({ type: Actions.add, item: item })
                    }} className="plus" id={item.itemId + "plus"}>+</button>

                </div>) :
                (<div className="addButtonDiv">
                    <button onClick={() => setCartObject({ type: "add", item: item })} className="addbutton">ADD</button>
                </div>)}
               


            </div>
        
        

    );
}

export default Button;