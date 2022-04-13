import { getStateDetails } from "./getStateDetails";

export const getOnlyVegDetails = (state)=> {
    let stateDetails = getStateDetails(state,"onlyVeg");
    return stateDetails;
}