import { getStateDetails } from "./getStateDetails";

export const getCartDetails = (state)=> {
    let stateDetails = getStateDetails(state,"cart");
    return stateDetails.cart;
}

export const getItemCountDetails = (state) => {
    let stateDetails = getStateDetails(state,"cart");
    return stateDetails.itemCount;
}
export const getTotalItems = (state) => {
    let {itemCount,cart} = getStateDetails(state,"cart");
    let items= 0;
    for(let item of cart)
    {
         items = items + itemCount.get(item.itemId);
    }
    return items;
};

export const getTotalCharge =  (state) => {
    let {itemCount,cart} = getStateDetails(state,"cart");
    let total = 0;
     for( let item of cart)
     {
          total = total + (item.itemPrice*itemCount.get(item.itemId));
     }
     return total;
};
