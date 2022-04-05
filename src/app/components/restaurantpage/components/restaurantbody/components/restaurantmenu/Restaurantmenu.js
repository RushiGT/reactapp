import React, { useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import Appcontext from '../../../../../../context/Appcontext';
import Sectionlist from "./components/sectionlist";
import Itemlist from "./components/itemlist";
import Cart from "./components/cart";
import cartData from "./cartData/cartData";
import CartContext, { CartProvider } from "./context.js/CartContext";
import Action from '../../../../constants/Action';
let {add,reduce} = Action;
let cartObjectChanger = (currentState, action) => {
    let newState = structuredClone(currentState);
    let {cart,itemCount} = newState;
    let {type,item} = action;
    if (type === add) {
        if(!currentState.itemCount.has(item.itemId))
        {
            newState.cart.push(item);
            newState.itemCount.set(item.itemId, 1);
        }
        else
        {
            let oldItemCount = newState.itemCount.get(item.itemId);
            newState.itemCount.set(item.itemId, oldItemCount + 1);
        }
        console.log(newState);
        return { ...newState };

    }
    
    else if(type === reduce){
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

// let cartObjectChanger2 = (currentState, action) => {
//     let newState = structuredClone(currentState);
//     let {cart,itemCount} = newState;
//     let {type,item} = action;
//     if (type === "add" && !currentState.itemCount.has(item.itemId)) {

//         newState.cart.push(item);
//         newState.itemCount.set(item.itemId, 1);
//         console.log(newState);
//         return { ...newState };

//     }
//     else if (type === "increment") {

//         let oldItemCount = newState.itemCount.get(item.itemId);
//         newState.itemCount.set(item.itemId, oldItemCount + 1);
//         console.log(newState);
//         return { ...newState };

//     }
//     else if(type === "decrement"){
//         let oldItemCount = newState.itemCount.get(item.itemId);
//         if(oldItemCount === 1 )
//         {
//              newState.itemCount.delete(item.itemId);
//              for (var i = 0; i <newState.cart.length; i++) {

//                  if (newState.cart[i].itemId === item.itemId) {
//                      newState.cart.splice(i, 1);
//                      break;
//                  }
//              }
             
//         }
//         else 
//         {
//             newState.itemCount.set(item.itemId, oldItemCount - 1);
//         }
//         console.log(newState);
//         return { ...newState };

//     }
//     return currentState;

// }

function Restaurantmenu(props) {
    let {onlyVeg}  = props;
    let { menu } = useContext(Appcontext);
   
    let [cartObject, setCartObject] = useReducer(cartObjectChanger, { cart: [], itemCount: new Map() });
    let getTotal =  useCallback(() => {
        let total = 0;
         for( let item of cartObject.cart)
         {
              total = total + (item.itemPrice*cartObject.itemCount.get(item.itemId));
         }
         return total;
    },[cartObject]);

    let getTotalItems = useCallback(() => {
         let items= 0;
         for(let item of cartObject.cart)
         {
              items = items + cartObject.itemCount.get(item.itemId);
         }
         return items;
    },[cartObject]);

    let cartValues = useMemo(() => {return {cartObject ,setCartObject,getTotal,getTotalItems}},[cartObject]);

    return (
        <CartProvider value={cartValues}>
            <div className="menu">

                <Sectionlist menu={menu} />
                <Itemlist menu={menu} onlyVeg = {onlyVeg}/>
                <Cart />
            </div>
        </CartProvider>
    );

};
export default Restaurantmenu;