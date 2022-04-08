import React, { useEffect, useState } from "react";
import { useReducer ,useContext} from "react";
import CartContext from "../../../context.js/CartContext";
import Actions from "../../../../../../../constants/Action";
import { connect } from "react-redux";
import { add,reduce } from "../../../../../../../../../../redux/actions/CartActions";
function CartItem(props) {
    
    let { item ,quantity} = props;
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
     
    return (
        <div className="cartitem" id={item.itemId+"cart"}>
            {(item.itemType==="Veg")?<div className="cartItemType Veg">{item.itemType}</div> : <div className="cartItemType NonVeg">{item.itemType}</div> }
            <div className="cartItemName">{item.itemName}</div>
            <div className="quantityDivcart">
                <button onClick={() => props.reduce(item)} className="minus">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={() => props.add(item)} className="plus">+</button>
            </div>
            <div className="cartItemPrice">{item.itemPrice*quantity}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart : state.cart.cart,
        itemCount : state.cart.itemCount
    }
}
const mapDispatchToProps = dispatch => {
    return {
       add : (item) => dispatch(add(item)),
       reduce : (item) => dispatch(reduce(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartItem);