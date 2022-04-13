import React from "react";
import { useContext ,useState,useReducer,useCallback} from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { getCartDetails , getItemCountDetails } from "../../../../../../../../../../redux/reducers/selectors/getCartDetails";
function FilledCart(props) {
    let {cart,itemCount} = props;
    let getTotal =  useCallback(() => {
        let total = 0;
         for( let item of cart)
         {
              total = total + (item.itemPrice*itemCount.get(item.itemId));
         }
         return total;
    },[cart,itemCount]);

    let getTotalItems = useCallback(() => {
         let items= 0;
         for(let item of cart)
         {
              items = items + itemCount.get(item.itemId);
         }
         return items;
    },[cart,itemCount]);

    
    
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
        cart : getCartDetails(state),
        itemCount : getItemCountDetails(state)
    }
}

export default connect(mapStateToProps)(FilledCart);