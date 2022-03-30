import React, { useContext, useEffect, useReducer } from "react";
import Appcontext from '../../../../../../context/Appcontext';
import Sectionlist from "./components/sectionlist";
import Itemlist from "./components/itemlist";
import Cart from "./components/cart";
import cartData from "./cartData/cartData";
import CartContext, { CartProvider } from "./context.js/CartContext";
import { CART_ACTIONS } from './Restaurantmenu.constants';
let cartObjectChanger = (currentState, action) => {
    let newState = structuredClone(currentState);
    let {cart,itemCount} = newState;
    let {type,item} = action;
    if (type === "add" && !currentState.itemCount.has(item.itemId)) {

        newState.cart.push(item);
        newState.itemCount.set(item.itemId, 1);
        console.log(newState);
        return { ...newState };

    }
    else if (type === "increment") {

        let oldItemCount = newState.itemCount.get(item.itemId);
        newState.itemCount.set(item.itemId, oldItemCount + 1);
        console.log(newState);
        return { ...newState };

    }
    else if(type === "decrement"){
        let oldItemCount = newState.itemCount.get(item.itemId);
        if(oldItemCount === 1 )
        {
             newState.itemCount.delete(item.itemId);
             for (var i = 0; i <newState.cart.length; i++) {

                 if (newState.cart[i].itemId === item.itemId) {
                     newState.cart.splice(i, 1);
                     break;
                 }
             }
             
        }
        else 
        {
            newState.itemCount.set(item.itemId, oldItemCount - 1);
        }
        console.log(newState);
        return { ...newState };

    }
    return currentState;

}

function Restaurantmenu() {
    let { menu } = useContext(Appcontext);
    let [cartObject, setCartObject] = useReducer(cartObjectChanger, { cart: [], itemCount: new Map() });
    let getTotal = () => {
        let total = 0;
         for( let item of cartObject.cart)
         {
              total = total + (item.itemPrice*cartObject.itemCount.get(item.itemId));
         }
         return total;
    }

    return (
        <CartProvider value={{ cartObject, setCartObject, getTotal}}>
            <div className="menu">

                <Sectionlist menu={menu} />
                <Itemlist menu={menu} />
                <Cart />
            </div>
        </CartProvider>
    );

};
export default Restaurantmenu;