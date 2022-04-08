import ActionTypes from "../actions/ActionTypes";
const initialState ={ cart: [], itemCount: new Map() };
const cartReducer = (currentState = initialState, {type,item}) => {
    let newState = structuredClone(currentState);
    let {cart,itemCount} = newState;
   
    if (type === ActionTypes.ADD) {
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
    
    else if(type === ActionTypes.REDUCE){
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
export default cartReducer;