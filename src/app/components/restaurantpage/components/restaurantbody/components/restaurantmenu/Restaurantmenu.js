import React, { useContext ,useEffect,useReducer } from "react";
import Appcontext from '../../../../../../context/Appcontext';
import Sectionlist from "./components/sectionlist";
import Itemlist from "./components/itemlist";
import Cart from "./components/cart";
import cartData from "./cartData/cartData";
import CartContext,{CartProvider} from "./context.js/CartContext";
import { CART_ACTIONS } from './Restaurantmenu.constants';
let cartObjectChanger = (currentState, action) => {
    let itemQuantity, newCart,newTotal,newItemCount;
    
     if(action.type === "push" && !currentState.itemCount.has(action.item.itemId)) 
     {  
        newCart = currentState.cart;
        newCart.push(action.item)
        newItemCount = currentState.itemCount; 
        newItemCount.set(action.item.itemId, 1);
        newTotal = currentState.total + action.item.itemPrice;
        console.log(newCart,newTotal,newItemCount);
        console.log(currentState);
        return {...currentState,cart : newCart , total : newTotal, itemCount : newItemCount};


     }
     else if ( action.type === "increment")
     {
        const {itemCount} = currentState;
        const oldItemCount = itemCount.get(action.item.itemId) || 0;
        itemCount.set(action.item.itemId, oldItemCount + 1);
        return {...currentState};

     }
     return currentState;
     
} 
// let cartChanger = (current, action) => {
//      if(action.type === CART_ACTIONS.PUSH)
//      {
//           return [...current,action.item];
//      }
//      else if(action.type === CART_ACTIONS.REMOVE)
//      {
//         for (var i = 0; i < current.length; i++) {

//             if (current[i].itemId === action.item.itemId) {
//                 current.splice(i, 1);
//                 break;
//             }
//         }
//         return current;
        
//      }
//      return current;
     
// }
// let itemCountChanger = (current, action) => {
    
//     if(action.type === "remove")
//     {
//        current.delete(action.item.itemId);
//        return current;
       
//     }
//     else if(action.type === "increment" || action.type === "decrement" || action.type ===  "push")
//     {    
//         current.set(action.item.itemId, action.quantity );
//         return current;
//     }
   
//     return current;
// }
// let totalChanger = (current, action) => {
//     if(action.type === "push")
//     {
//          return current+ action.item.itemPrice;
//     }
    
//     else if(action.type === "increment")
//     {
       
//         return current+ action.item.itemPrice;
//     }
//     else if(action.type === "decrement" || action.type === "remove")
//     {
//         return current- action.item.itemPrice;
//     }
    
//     return current;
// }

function Restaurantmenu ()
{   let {menu} = useContext(Appcontext);
    let [cartObject, setCartObject]  = useReducer(cartObjectChanger,{ cart : [] , itemCount : new Map() , total : 0});
    // let [cart,setCart] = useReducer(cartChanger,[])
    // let [itemCount,setItemCount] = useReducer(itemCountChanger,new Map());
    // let [total , setTotal] = useReducer(totalChanger,0);
    let handleChange = (action) => {
         
           setCartObject(action);
        
    } 
    return(
        <CartProvider value = {{cartObject,setCartObject,handleChange}}>
        <div className="menu">
           
            <Sectionlist menu ={menu}/>
            <Itemlist menu = {menu} />
            <Cart />
        </div>
        </CartProvider>
    );

};
export default Restaurantmenu;