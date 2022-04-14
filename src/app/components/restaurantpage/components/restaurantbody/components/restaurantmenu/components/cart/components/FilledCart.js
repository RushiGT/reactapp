import React from "react";
import { useContext ,useState,useReducer,useCallback} from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { getCartDetails , getItemCountDetails ,getTotalItems,getTotalCharge} from "../../../../../../../../../../redux/reducers/selectors/getCartDetails";
function FilledCart(props) {
    let {cart,itemCount,totalItems,totalCharge} = props; 
    return (

        <div>


            <div id="cartTitle">Cart</div>
            <div id="cartTotalItems">{totalItems} items</div>
            <div id="filler1">
                {cart.map((item)=>(<CartItem key={item.itemId} item={item} quantity={itemCount.get(item.itemId)}/>))}
                    </div>
            <div id="cartTotalDiv">
                <div id="cartTotalTitle">Subtotal</div>
                <div id="cartTotal">{totalCharge}</div>
            </div>
        </div>


    );
}
const mapStateToProps = state => {
    return {
        cart : getCartDetails(state),
        itemCount : getItemCountDetails(state),
        totalItems : getTotalItems(state),
        totalCharge : getTotalCharge(state)
    }
}

export default connect(mapStateToProps)(FilledCart);