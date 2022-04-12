import { getStateDetails } from "./getStateDetails";

export const getCartDetails = (state)=> {
    let stateDetails = getStateDetails(state,"cart");
    return stateDetails.cart;
}

export const getItemCountDetails = (state) => {
    let stateDetails = getStateDetails(state,"cart");
    return stateDetails.itemCount;
}