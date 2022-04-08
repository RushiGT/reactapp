import React, { useContext ,useEffect, useState} from "react";
import CartContext from "../../context.js/CartContext";
import Actions from "../../../../../../constants/Action";
import { add, reduce } from "../../../../../../../../../redux/actions/CartActions";
import { connect } from "react-redux";

function Button (props)
{   let {item} = props;
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject} = cartContext;
    let {itemCount,cart}  = props;
   
    
    return(
        
            <div className="buttonDiv">
            {(itemCount.has(item.itemId)) ?
                (<div className="quantityDiv">
                    <button onClick={()=>props.reduce(item)} className="minus" id={item.itemId + "minus"}>-</button>
                    <span className="quantity" id={item.itemId + "quantity"}> {itemCount.get(item.itemId)}</span>
                    <button onClick={()=>props.add(item)} className="plus" id={item.itemId + "plus"}>+</button>

                </div>) :
                (<div className="addButtonDiv">
                    <button onClick={()=>props.add(item)} className="addbutton">ADD</button>
                </div>)}
               


            </div>
        
        

    );
}
// () => {
//     setCartObject({ type: Actions.add, item: item })
// }
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
export default connect(mapStateToProps,mapDispatchToProps)(Button);