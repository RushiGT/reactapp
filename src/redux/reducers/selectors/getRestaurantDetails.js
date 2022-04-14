import { getStateDetails } from "./getStateDetails";
export const getRestaurantObjectDetails = (state)=> {
    let stateDetails = getStateDetails(state,"restaurant");
    return stateDetails;
}
export const getRestaurantDetails = (state)=> {
    let stateDetails = getStateDetails(state,"restaurant");
    return stateDetails.data;
}

export const getLoadingDetails = (state) => {
    let stateDetails = getStateDetails(state,"restaurant");
    return stateDetails.loading;
}

export const getErrorDetails = (state) => {
    let stateDetails = getStateDetails(state,"restaurant");
    return stateDetails.error;
}

export const getMenuDetails =  (state)=> {
    let stateDetails = getStateDetails(state,"restaurant");
    return stateDetails.data.menu;
}