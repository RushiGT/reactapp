import React from "react";
import { useContext ,useState,useReducer} from "react";
import CartContext from "../../../context.js/CartContext";
import CartItem from "./CartItem";
import { connect } from "react-redux";
function FilledCart(props) {
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject,getTotal,getTotalItems} = cartContext;
    let {cart,itemCount} = props;
    
    return (

        <div>


            <div id="cartTitle">Cart</div>
            <div id="cartTotalItems">{getTotalItems()} items</div>
            <div id="filler1">
                {cart.map((item)=>(<CartItem key={item.itemId} item={item} quantity={itemCount.get(item.itemId)}/>))}
                    </div>
            <div id="cartTotalDiv">
                <div id="cartTotalTitle">Subtotal</div>
                <div id="cartTotal">{getTotal()}</div>
            </div>
        </div>


    );
}
const mapStateToProps = state => {
    return {
        cart : state.cart.cart,
        itemCount : state.cart.itemCount
    }
}

export default connect(mapStateToProps)(FilledCart);