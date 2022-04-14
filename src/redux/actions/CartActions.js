import ACTIONTYPES from "./ActionTypes";

export const add =  (item) => {
return {
    type : ACTIONTYPES.ADD,
    item : item
};
}

export const reduce = (item) => {
    return {
        type : ACTIONTYPES.REDUCE,
        item : item
    };
}
